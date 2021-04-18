import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutfrontComponent } from './layoutfront.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutfrontComponent,
    children: [          
      {
        path: '',
        loadChildren: () => import('../../peliculas/peliculas.module').then( m => m.PeliculasModule )    
      }        
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutfrontRoutingModule { }
