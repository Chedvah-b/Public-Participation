import { Component, OnInit } from '@angular/core';
//import {accident} from '../accident/accident.component';

@Component({
  selector: 'app-suggestions',
  templateUrl: './suggestions.component.html',
  styleUrls: ['./suggestions.component.css']
})
export class SuggestionsComponent implements OnInit {

  constructor() { }
  data=[{img:'https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image-p-1080.jpeg' , subject:'פחים שרופים', street: "כף החיים",likes:5,dislikes:10},
  {img:'https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image-p-1080.jpeg' , subject:'פחים שרופים', street: "כף החיים",likes:5,dislikes:10},
  {img:'https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image-p-1080.jpeg', subject:'פחים שרופים', street: "כף החיים",likes:5,dislikes:10},
  {img:'https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image-p-1080.jpeg', subject:'פחים שרופים', street: "כף החיים",likes:5,dislikes:10},
  {img:'https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image-p-1080.jpeg', subject:'פחים שרופים', street: "כף החיים",likes:5,dislikes:10},
  {img:'https://global-uploads.webflow.com/5ef5480befd392489dacf544/5f9f5e5943de7e69a1339242_5f44a7398c0cdf460857e744_img-image-p-1080.jpeg', subject:'פחים שרופים', street: "כף החיים",likes:5,dislikes:10}]
  ngOnInit(): void {
    //const data=get();


  }
  

}


