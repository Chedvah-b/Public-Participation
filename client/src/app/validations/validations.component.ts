import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validations',
  templateUrl: './validations.component.html',
  styleUrls: ['./validations.component.css']
})
export class ValidationsComponent implements OnInit {
  
  @Input() validInComponent: FormGroup | undefined;
  constructor() { }

  ngOnInit(): void {
  }

}
