import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidenav-admin',
  templateUrl: './sidenav-admin.component.html',
  styleUrls: ['./sidenav-admin.component.scss']
})
export class SidenavAdminComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  registrar(){
    this.router.navigate(['admin/register']);
  }
  tabla(){
    this.router.navigate(['admin/users']);
  }
  logout(){
    this.router.navigate(['../']);
  }

}
