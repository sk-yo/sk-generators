import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';

import { AppComponent } from './app.component';
import { CovalentCoreModule, CovalentLayoutModule } from '@covalent/core';
import { MngtModule } from './view/mngt/mngt.module';
import { SysModule } from './view/sys/sys.module';
import { UserModule } from './view/user/user.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule.forRoot(),
    CovalentCoreModule.forRoot(),
    CovalentLayoutModule.forRoot(),
    MngtModule.forRoot(),
    SysModule.forRoot(),
    UserModule.forRoot(),
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }