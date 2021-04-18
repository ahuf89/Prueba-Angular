import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutcrmComponent } from './layoutcrm.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutcrmComponent,
    children: [  
      {
        path: '',
        loadChildren: () => import('../../admin-blog/admin-blog.module').then( m => m.AdminBlogModule )    
      }  
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutcrmRoutingModule { }
