import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service/service.service';

import { Hazard } from './Hazard';
import { User } from './User';


@Component({
  selector: 'app-hazard-report',
  templateUrl: './hazard-report.component.html',
  styleUrls: ['./hazard-report.component.css']
  
})


export class HazardReportComponent implements OnInit {
  hazard = new Hazard("", "", 0, "", "", "", new Date(""),
    new User("", "", "", ""));
  feedback = false;

  topics = ["publicBuildings", "buisnessAreas", "openSpace", "urbanReneral"];

  constructor(private data: ServiceService) {

  }



  ngOnInit(): void {
  }

  OnSubmit() {
    this.hazard.date = new Date();
    this.data.num++;
    this.data.listOfhazards[this.data.num] = this.hazard;
    this.feedback = true;
}



  // Get the modal
  // modal = document.getElementById("myModal");

  // // Get the button that opens the modal
  //  btn = document.getElementById("submit");

  // // Get the <span> element that closes the modal
  // span = document.getElementsByClassName("close")[0];

  // // When the user clicks on the button, open the modal
  // btn.click = function() {
  //   modal.style.display = "block";
  // }

  // // When the user clicks on <span> (x), close the modal
  // span.onclick = function() {
  //   modal.style.display = "none";
  // }

  // // When the user clicks anywhere outside of the modal, close it
  // window.onclick = function(event) {
  //   if (event.target == modal) {
  //     modal.style.display = "none";
  //   }
  // }

}
