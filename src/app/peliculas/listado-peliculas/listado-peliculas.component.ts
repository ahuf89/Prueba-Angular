import { Component, OnInit } from '@angular/core';
import { Movies } from '../interfaces/movie.interface';
import { ServicioPeliculasService } from '../services/servicio-peliculas.service';
import { environment } from 'src/environments/environment';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listado-peliculas',
  templateUrl: './listado-peliculas.component.html',
  styleUrls: ['./listado-peliculas.component.scss']
})
export class ListadoPeliculasComponent implements OnInit {

  uriImage: string = environment.uriImage;

  movies: Movies;

  constructor(private servicioPeliculas: ServicioPeliculasService,
              private router: Router) { }

  ngOnInit(): void {
    this.getPeliculas();
  }

  async getPeliculas(){
    await this.servicioPeliculas.getPeliculas()
    .subscribe( resp =>{
      this.movies = resp;      
      // console.log('peliculas',this.movies);
    });    
  }  
}
