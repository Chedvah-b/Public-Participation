import { Injectable } from '@angular/core';
import { Hazard } from '../hazard-report/Hazard';
import { User } from '../hazard-report/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
 

  listOfhazards!:Hazard[];
  num:number;

  constructor() { 
    this.num=-1;
     this.listOfhazards=[new Hazard("","",0,"","","",new Date(),
   new User("","","",""))];}//to initialize
}
