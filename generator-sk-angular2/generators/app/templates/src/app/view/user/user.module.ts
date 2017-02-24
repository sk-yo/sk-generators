import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CovalentCoreModule, CovalentLayoutModule } from '@covalent/core';
import { UserDashboardComponent } from './@dashboard/user-dashboard.component';
import { UserRoutingModule } from './user-routing.module.';

@NgModule({
  declarations: [
    UserDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CovalentCoreModule.forRoot(),
    CovalentLayoutModule.forRoot(),
    UserRoutingModule
  ]
})
export class UserModule {
   static forRoot() : ModuleWithProviders {
    return {
      ngModule: UserModule,
      providers: []
    }
  }
 }