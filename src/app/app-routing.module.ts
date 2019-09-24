import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinnerComponent } from './shared/components/spinner/spinner.component';
import { ApplicationHeaderComponent } from './core/header/application-header/application-header.component';
const routes: Routes = [
  {path: '', component: ApplicationHeaderComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
