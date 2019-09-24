import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error/error.component';
import { ApplicationHeaderComponent } from './header/application-header/application-header.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [ErrorComponent, ApplicationHeaderComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    ApplicationHeaderComponent
  ]
})
export class CoreModule { }
