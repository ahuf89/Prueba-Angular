import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';


const routes: Routes = [        
  {
    path: '',
    loadChildren: () => import('./layout/layoutfront/layoutfront.module').then( m => m.LayoutfrontModule )    
  },
  {
    path: 'admin',
    loadChildren: () => import('./layout/layoutcrm/layoutcrm.module').then( m => m.LayoutcrmModule )    
  },  
  {
    path: 'login',    
    component: LoginComponent      
  }
  // {
  //   path:'**',
  //   redirectTo: 'blog'
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
