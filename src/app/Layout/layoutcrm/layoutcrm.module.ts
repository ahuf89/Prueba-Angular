import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutcrmRoutingModule } from './layoutcrm-routing.module';
import { LayoutcrmComponent } from './layoutcrm.component';
import { MaterialModule } from 'src/app/material/material.module';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [LayoutcrmComponent],
  imports: [
    CommonModule,
    LayoutcrmRoutingModule,
    MaterialModule,
    SharedModule
  ]
})
export class LayoutcrmModule { }
