import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SindenavComponent } from './sindenav/sindenav.component';

// flexlayout
import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';
import { SidenavAdminComponent } from './sidenav-admin/sidenav-admin.component';



@NgModule({
  declarations: [SindenavComponent, SidenavAdminComponent],
  imports: [
    CommonModule,
    FlexLayoutModule, 
    MaterialModule    
  ],
  exports: [
    SindenavComponent,
    SidenavAdminComponent]
})
export class SharedModule { }
 