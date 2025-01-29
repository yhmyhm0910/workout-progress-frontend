import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IconModule, IconSetService } from '@coreui/icons-angular';
import { OneRepMaxCalculatorComponent } from '../../../views/one-rep-max-calculator/one-rep-max-calculator.component'
const routes: Routes = [
  { path: 'one-rep-max-calculator', component: OneRepMaxCalculatorComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes), IconModule],
  exports: [RouterModule, IconSetService]
})
export class DefaultHeaderModule {}
