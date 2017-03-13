import { NgModule }      from '@angular/core';
import { FormsModule } from '@angular/forms'
import { BrowserModule } from '@angular/platform-browser';
import {HttpModule } from '@angular/http'
import { AddReportComponent } from './components/addreport.component'
import { UserComponent } from './components/user.component';
import { LdapService } from './services/ldap.service';
import { ReportComponent } from './components/reports.component'
import { AppComponent }  from './app.component';

import { OracleComponent } from './components/oracle.component';

import { VeeamComponent } from './components/veeam.component'

import { routing } from './app.routing'

@NgModule({
  imports:      [ BrowserModule ,  HttpModule, routing, FormsModule  ],
  declarations: [ AppComponent , ReportComponent , UserComponent , AddReportComponent , VeeamComponent , OracleComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
