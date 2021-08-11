import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-routing-button',
  templateUrl: './routing-button.component.html',
  styleUrls: ['./routing-button.component.css']
})
export class RoutingButtonComponent implements OnInit {

  constructor() { }
  logo: string = "../assets/פוטר.png";
  logo2:string="../assets/logo.png";
  ngOnInit(): void {
  }

}
