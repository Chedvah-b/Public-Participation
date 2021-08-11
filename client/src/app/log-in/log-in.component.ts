import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder }  from '@angular/forms';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  code: string | undefined;
  name: string | undefined;
  constructor(){}
  // logInForm: FormGroup;
  // constructor(private signInForm: FormBuilder) {
  //   this.logInForm=this.signInForm.group({
  //    name:['',[Validators.required]],
  //    password:['', [Validators.minLength(8)]],
  //   });
  // }
  ngOnInit(): void {
  }

}
