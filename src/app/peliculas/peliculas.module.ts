import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { PeliculasRoutingModule } from './peliculas-routing.module';

import { FlexLayoutModule } from '@angular/flex-layout';
import { MaterialModule } from '../material/material.module';

import { NgxSpinnerModule } from "ngx-spinner";

import { ListadoPeliculasComponent } from './listado-peliculas/listado-peliculas.component';
import { PeliculaComponent } from './pelicula/pelicula.component';

@NgModule({
  declarations: [ListadoPeliculasComponent, PeliculaComponent],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    RouterModule,  
    NgxSpinnerModule  
  ],
  exports:[]
})
export class PeliculasModule { }
