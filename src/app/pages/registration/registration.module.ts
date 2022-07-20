import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegistrationPageRoutingModule } from './registration-routing.module';

import { RegistrationPage } from './registration.page';
import {HalfCircleSpinnerModule} from 'angular-epic-spinners'
import { LogoComponent } from 'src/app/components/logo/logo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegistrationPageRoutingModule,
    HalfCircleSpinnerModule,
  ],
  declarations: [
    RegistrationPage,
    LogoComponent,
  ]
})
export class RegistrationPageModule {}
