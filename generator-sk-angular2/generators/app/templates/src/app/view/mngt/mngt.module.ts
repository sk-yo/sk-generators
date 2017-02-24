import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { CovalentCoreModule, CovalentLayoutModule } from '@covalent/core';
import { MngtDashboardComponent } from './@dashboard/mngt-dashboard.component';
import { MngtRoutingModule } from './mngt-routing.module.';

@NgModule({
  declarations: [
    MngtDashboardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CovalentCoreModule.forRoot(),
    CovalentLayoutModule.forRoot(),
    MngtRoutingModule
  ]
})
export class MngtModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: MngtModule,
      providers: []
    }
  }
}