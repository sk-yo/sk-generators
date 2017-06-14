import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CovalentLayoutModule } from '@covalent/core';
import { UserRoutingModule } from './user-routing.module.';

@NgModule({
  declarations: [
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    CovalentLayoutModule,
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