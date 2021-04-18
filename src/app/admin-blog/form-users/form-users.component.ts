import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

import { Router } from '@angular/router';
import swal from'sweetalert2';


@Component({
  selector: 'app-form-users',
  templateUrl: './form-users.component.html',
  styleUrls: ['./form-users.component.scss']
})
export class FormUsersComponent implements OnInit {

  titularAlert: string = '';
  form: FormGroup;

  hide = true;
  
  constructor(private router: Router,
              private formBuilder: FormBuilder) {
    this.buildForm();
  }

  ngOnInit(): void {}

  private buildForm(){
  this.form = this.formBuilder.group({
      name:      ['',  [Validators.required]],
      nick:      ['',  []],
      Telefono:  ['',  []],
      email:     ['', [Validators.required, Validators.email]],          
      password1: ['', [Validators.required]],
      password2: ['', [Validators.required]],   
    });  
  }

  save(event: Event) {
    event.preventDefault();
    if (this.form.valid) {
      const value = this.form.value;
      console.log(value);
      swal.fire('Registro exitoso...', this.titularAlert, 'success');
      this.router.navigate(['admin/users']);
    }
    
  }
  
  doSomething() {
    console.log('click');
  }

  registrar(){
    this.router.navigate(['admin/register']);
  }
}