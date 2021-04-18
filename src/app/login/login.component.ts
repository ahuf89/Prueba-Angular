import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  formL: FormGroup;

  hide = true;

  constructor(private router: Router,
              private formBuilder: FormBuilder) {
              // this.buildForm();    
  }
  ngOnInit(): void {
    this.buildForm();  
  }
private buildForm(){
  this.formL= this.formBuilder.group({
      name:      ['',  [Validators.required]],              
      password1: ['', [Validators.required]],       
    });  
  }

  save(event: Event) {
    event.preventDefault();
    if (this.formL.valid) {
      const value = this.formL.value;
      console.log(value);
    }
  }

  doSomething() {
    console.log('click');
  }

  // getErrorMessage() {
  //   if (this.email.hasError('required')) {
  //     return 'You must enter a value';
  //   }

  //   return this.email.hasError('email') ? 'Not a valid email' : '';
  // }

  

  

}
