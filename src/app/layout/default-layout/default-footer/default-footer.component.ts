import { Component } from '@angular/core';
import { FooterComponent } from '@coreui/angular';
import { cibGithub } from '@coreui/icons';
import { IconModule, IconSetService } from '@coreui/icons-angular';

@Component({
    selector: 'app-default-footer',
    templateUrl: './default-footer.component.html',
    standalone: true,
    imports: [
      IconModule
    ],
    providers: [
      IconSetService
    ]
})
export class DefaultFooterComponent extends FooterComponent {
  constructor(
    public iconSet: IconSetService
  ) {
    iconSet.icons = { cibGithub };
    super();
  }
}
