import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutfrontRoutingModule } from './layoutfront-routing.module';
import { LayoutfrontComponent } from './layoutfront.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LayoutfrontComponent],
  imports: [
    CommonModule,
    LayoutfrontRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class LayoutfrontModule { }
