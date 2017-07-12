import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core';

import { userRoutes } from './user-routing.module.';
import { NavListLayoutComponent } from '../../component/layout/nav-list-layout/nav-list-layout.component'
import { NavViewLayoutComponent } from '../../component/layout/nav-view-layout/nav-view-layout.component'

@NgModule({
  declarations: [
    NavListLayoutComponent,
    NavViewLayoutComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    CovalentLayoutModule,
    userRoutes
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