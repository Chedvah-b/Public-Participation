import { Route } from "@angular/router";
import { HazardReportComponent } from "./hazard-report/hazard-report.component";
import { InformationComponent } from "./information/information.component";
import { LogInComponent } from "./log-in/log-in.component";
import { PreviousReportsComponent } from "./previous-reports/previous-reports.component";
import { ProjectsComponent } from "./projects/projects.component";
import { RoutingButtonComponent } from "./routing-button/routing-button.component";
import { SuggestionsComponent } from "./suggestions/suggestions.component";
import { UrbanDirectorComponent } from "./urban-director/urban-director.component";
import { UrbanPlannerComponent } from "./urban-planner/urban-planner.component";


export const ROUTRS: Route[] = [
    { path: '', redirectTo:"routingButton", pathMatch:'prefix'},
    { path: 'routingButton', component:RoutingButtonComponent,
    children:[ 
    { path: 'logInManager', component: LogInComponent},
    { path: 'hazardReport', component: HazardReportComponent},
    { path: 'previousReport', component: PreviousReportsComponent},
    { path: 'suggestions', component: SuggestionsComponent},
    { path: 'urbanPlanner', component: UrbanPlannerComponent},
    { path: 'Meizamim', component: ProjectsComponent},
    { path: 'urbanDirector', component: UrbanDirectorComponent },
    ]},
    // { path: 'urbanDirector', component: UrbanDirectorComponent },
    // { path: 'urbanDirector', component: UrbanDirectorComponent },
    // { path: 'hazardReport', component: HazardReportComponent},
    // { path: 'routingButton/logInManager', component: LogInComponent}
    //{ path: "errorpage", component: ErrorPageComponent },
    // { path: "**", component: ErrorPageComponentComponent}//אם המשתמש מנסה להכנס לראוטר שלא קיים
]