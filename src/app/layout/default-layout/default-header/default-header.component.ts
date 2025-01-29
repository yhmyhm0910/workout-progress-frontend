import { CommonModule, NgStyle, NgTemplateOutlet } from '@angular/common';
import { Component, computed, inject, input, NgModule } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

import {
  AvatarComponent,
  BadgeComponent,
  BreadcrumbRouterComponent,
  ColorModeService,
  ContainerComponent,
  DropdownComponent,
  DropdownDividerDirective,
  DropdownHeaderDirective,
  DropdownItemDirective,
  DropdownMenuDirective,
  DropdownToggleDirective,
  HeaderComponent,
  HeaderNavComponent,
  HeaderTogglerDirective,
  NavItemComponent,
  NavLinkDirective,
  ProgressBarDirective,
  ProgressComponent,
  SidebarToggleDirective,
  TextColorDirective,
  ThemeDirective
} from '@coreui/angular';

import { IconDirective, IconSetService } from '@coreui/icons-angular';
import { cilSun, cilMoon, cilContrast } from '@coreui/icons';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environment/environment';
import { jwtDecode } from 'jwt-decode';
import { GlobalsService } from '../../../globals.service'

@Component({
  selector: 'app-default-header',
  templateUrl: './default-header.component.html',
  styleUrls: ['./default-header.component.css'],
  standalone: true,
  imports: [ContainerComponent, HeaderTogglerDirective, SidebarToggleDirective, IconDirective, HeaderNavComponent, NavItemComponent, NavLinkDirective, NgTemplateOutlet, BreadcrumbRouterComponent, ThemeDirective, DropdownComponent, DropdownToggleDirective, TextColorDirective, AvatarComponent, DropdownMenuDirective, DropdownHeaderDirective, DropdownItemDirective, BadgeComponent, DropdownDividerDirective, ProgressBarDirective, ProgressComponent, NgStyle, CommonModule, RouterModule]
})


export class DefaultHeaderComponent extends HeaderComponent {

  readonly #colorModeService = inject(ColorModeService);
  readonly colorMode = this.#colorModeService.colorMode;

  readonly colorModes = [
    { name: 'light', text: 'Light', icon: 'cilSun' },
    { name: 'dark', text: 'Dark', icon: 'cilMoon' },
    { name: 'auto', text: 'Auto', icon: 'cilContrast' }
  ];

  readonly backend_apiUrl = environment.backend_apiUrl;
  readonly icons = computed(() => {
    const currentMode = this.colorMode();
    return this.colorModes.find(mode => mode.name === currentMode)?.icon ?? 'cilSun';
  });

  constructor(
    private httpClient: HttpClient,
    private globalsService: GlobalsService,
    private router: Router,
    public iconSet: IconSetService
  ) {
    super();
    iconSet.icons = {cilSun, cilMoon, cilContrast}
    this.getAccessAndIDToken_thenDecodeIDToken();
  }

  isLoggedIn = false;
  user_full_name = "";

  ngOnInit(): void {
  }

  // Get access and ID token from backend
  getAccessAndIDToken_thenDecodeIDToken() {
    const decodeIDToken = (token: string)  => {
      try {
        const decoded: any = jwtDecode(token);
        // console.log('Decoded JWT:', decoded);
        this.globalsService.user_full_name = decoded.given_name + " " + decoded.family_name;
        this.globalsService.userId = decoded.sub;
        this.user_full_name = this.globalsService.user_full_name;
        return decoded;
      } catch (error) {
        console.error('Error decoding JWT', error);
        return null;
      }
    };
    this.httpClient.get(`${this.backend_apiUrl}/api/Login/GetAccessAndIDToken`, { withCredentials: true })
    .subscribe(
      (res: any) => {
        // console.log(res);
        const access_token = res.access_token;
        const id_token = res.id_token;
        this.globalsService.access_token = access_token;
        this.globalsService.id_token = id_token;
        console.log(`access_token=${this.globalsService.access_token}`);
        console.log(`id_token=${this.globalsService.id_token}`);
        decodeIDToken(id_token);
        if (this.globalsService.access_token || this.globalsService.id_token) {
          this.isLoggedIn = true;
        };
        if (!this.isLoggedIn) {
          this.router.navigate(['/login'], {
            state: { body: {
              login: 'fail'
              }
            }
          });
        };
      },
      (error) => {
        console.error('Error fetching access and ID token', error); // Handle errors
      }
    );
  };

  handleOauthResponse(): void {
    const clientId = environment.OAuth_ClientID;
    const redirectUri = `${environment.backend_apiUrl}/api/Login/oauth/callback`; // Update this to your backend callback URL
    const scope = 'openid email profile';

    const oauthUrl = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${clientId}` +
                     `&redirect_uri=${encodeURIComponent(redirectUri)}` +
                     `&response_type=code&scope=${encodeURIComponent(scope)}` +
                     `&access_type=offline&prompt=consent`;

    // Redirect the user to Google’s OAuth consent page
    window.location.href = oauthUrl;
  }
}
