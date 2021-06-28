import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HazardReportComponent } from './hazard-report/hazard-report.component';

@NgModule({
  declarations: [
    AppComponent,
    HazardReportComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
