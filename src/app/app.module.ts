import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  HTTP_INTERCEPTORS,
  HttpClientModule,
  HttpClient,
} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgComponent } from './org/org.component';
import { NgxSpinnerModule } from 'ngx-spinner';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { Org2Component } from './org2/org2.component';

@NgModule({
  declarations: [
    AppComponent,
    OrgComponent,
    HomeComponent,
    NavbarComponent,
    Org2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxOrgChartModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
