import { Component } from '@angular/core';
import { NgStyle } from '@angular/common';
import { IconDirective } from '@coreui/icons-angular';
import { ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, FormControlDirective, ButtonDirective } from '@coreui/angular';

import { Router } from '@angular/router';
import { environment } from '../../../../environment/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./style/css/main.css'],
    standalone: true,
    imports: [ContainerComponent, RowComponent, ColComponent, CardGroupComponent, TextColorDirective, CardComponent, CardBodyComponent, FormDirective, InputGroupComponent, InputGroupTextDirective, IconDirective, FormControlDirective, ButtonDirective, NgStyle]
})
export class LoginComponent {

  abc: string = "/assets/images/angular.jpg";
  poster: string = "/assets/images/login_poster_blue.webp";
  readonly backend_apiUrl = environment.backend_apiUrl;
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

  constructor(
    private router: Router
  ) {
    const navigation = this.router.getCurrentNavigation();
    const bodyData = navigation?.extras.state?.['body'];
    console.log(bodyData); // { key: 'value', anotherKey: 'anotherValue' }
  }

}
