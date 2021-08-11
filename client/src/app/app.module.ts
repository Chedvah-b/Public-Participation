import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HazardReportComponent } from './hazard-report/hazard-report.component';
import { UrbanDirectorComponent } from './urban-director/urban-director.component';
import { LogInComponent } from './log-in/log-in.component';
import { RouterModule } from '@angular/router';
import { ROUTRS } from './routs';
import { ValidationsComponent } from './validations/validations.component';
import { RoutingButtonComponent } from './routing-button/routing-button.component';
import { InformationComponent } from './information/information.component';
import { PreviousReportsComponent } from './previous-reports/previous-reports.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
// import { ProjectsComponent } from "./projects/projects.component";

@NgModule({
  declarations: [
    AppComponent,
   HazardReportComponent,
    UrbanDirectorComponent,
    LogInComponent,
    ValidationsComponent,
    RoutingButtonComponent,
    InformationComponent,
    PreviousReportsComponent,
    SuggestionsComponent,
    // ProjectsComponent
    
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    RouterModule.forRoot(ROUTRS),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
