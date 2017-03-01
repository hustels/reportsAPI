import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule } from '@angular/http'
import { UserComponent } from './components/user.component';
import { LdapService } from './services/ldap.service';
import { AppComponent }  from './app.component';
import { ReportComponent } from './components/reports.component'
import { routing } from './app.routing'

@NgModule({
  imports:      [ BrowserModule ,  HttpModule, routing ],
  declarations: [ AppComponent , ReportComponent , UserComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
