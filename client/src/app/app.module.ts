import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HazardReportComponent } from './hazard-report/hazard-report.component';
import { SuggestionsComponent } from './suggestions/suggestions.component';

@NgModule({
  declarations: [
    AppComponent,
    HazardReportComponent,
    SuggestionsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
