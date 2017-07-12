import { HttpModule } from '@angular/http';
import { NgModule, LOCALE_ID } from '@angular/core';
import { BrowserModule, Title }  from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CovalentHighlightModule } from '@covalent/highlight';
import { CovalentMarkdownModule } from '@covalent/markdown';

import { AppComponent } from './app.component';


import { SharedModule } from './shared/shared.module';
import { CovalentMessageModule, CovalentJsonFormatterModule } from "@covalent/core";


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    BrowserAnimationsModule,
    SharedModule,
    CovalentHighlightModule,
    CovalentMarkdownModule,
    CovalentMessageModule,
    CovalentJsonFormatterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }