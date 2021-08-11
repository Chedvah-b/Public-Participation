import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-urban-director',
  templateUrl: './urban-director.component.html',
  styleUrls: ['./urban-director.component.css']
})
export class UrbanDirectorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    
  }
  OnSubmit(){
     alert("פרטי המיזם נשלחו בהצלחה.");

}
send(){
  alert("פרטי הדיווח נשלחו בהצלחה! ");
}
}
