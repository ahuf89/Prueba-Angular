import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sindenav',
  templateUrl: './sindenav.component.html',
  styleUrls: ['./sindenav.component.scss']
})
  export class SindenavComponent implements OnInit {
  
    constructor(private router: Router) { }
  
    ngOnInit(): void {
    }
  
    regresar(){
      this.router.navigate(['/']);
    }
  login(){
    this.router.navigate(['/login']);
  }
}
