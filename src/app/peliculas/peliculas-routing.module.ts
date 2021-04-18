import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

const routes: Routes = [
 
      {
        path: '',
        component: ListadoPeliculasComponent
      },
      {
        path: 'pelicula/:id',
        component: PeliculaComponent
      },      
      {
        path: '**', redirectTo: 'listado'        
      }
    ];  


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
