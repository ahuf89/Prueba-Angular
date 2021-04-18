import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { environment } from 'src/environments/environment';

import { switchMap } from 'rxjs/operators';
//Interfaces
import { Movie} from '../interfaces/mov.interface';
import { Related } from '../interfaces/related.interface';

import { NgxSpinnerService } from "ngx-spinner";
//Servicio
import { ServicioPeliculasService } from '../services/servicio-peliculas.service';

@Component({
  selector: 'app-pelicula',
  templateUrl: './pelicula.component.html',
  styleUrls: ['./pelicula.component.scss']
})
export class PeliculaComponent implements OnInit {

  uriImage: string = environment.uriImage;
  movie!: Movie;
  related!: Related;  
  
  constructor(private router: Router,
              private activatedRouter: ActivatedRoute,
              private servioPeliculas: ServicioPeliculasService,
              private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getDetalle();
    this.getRelated();   
    

    // this.spinner.show();   
  }

  getDetalle(){
    this.activatedRouter.params
    .pipe(
      switchMap( ({ id }) =>this.servioPeliculas.getPeliculaPorId( id ) )        
    )
    .subscribe( movie => {
      setTimeout(() => {
        this.spinner.hide();        
      }, 2000);
      this.movie = movie;
    })              
  }

  getRelated(){
    this.activatedRouter.params
    .pipe(
      switchMap( ({ id }) =>this.servioPeliculas.getSimilarId( id ) )        
    )
    .subscribe( related => this.related = related);                
  }
  
  regresar(){
      this.router.navigate(['/']);
  }

  getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
  }  
}
