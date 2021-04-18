import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminBlogRoutingModule } from './admin-blog-routing.module';

import { MaterialModule } from '../material/material.module';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { NgxSpinnerModule } from "ngx-spinner";

import { TableComponent } from './table/table.component';
import { FormUsersComponent } from './form-users/form-users.component';
import { ReactiveFormsModule } from '@angular/forms';
// import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';


@NgModule({
  declarations: [TableComponent, FormUsersComponent],
  imports: [
    CommonModule,
    AdminBlogRoutingModule,
    FlexLayoutModule,
    RouterModule,
    MaterialModule,
    NgxSpinnerModule,
    ReactiveFormsModule,
    // SweetAlert2Module
  ]
})
export class AdminBlogModule { }
