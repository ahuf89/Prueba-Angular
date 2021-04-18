import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormUsersComponent } from './form-users/form-users.component';
import { TableComponent } from './table/table.component';

const routes: Routes = [     
  {  
    path:'',
    component: TableComponent
  },
  {
    path:'users',   
    component: TableComponent
  },
  {
    path:'register',
    component: FormUsersComponent
  }    
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminBlogRoutingModule { }
