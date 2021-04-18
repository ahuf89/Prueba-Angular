import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../interfaces/user.interface';
import { UsersService } from '../../services/users.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit { 
 
  users: User;  
  
  constructor(private userService: UsersService,
    private router: Router,
    private activatedRouter: ActivatedRoute,) {    
  }

  ngOnInit(): void {
   
    this.getUsers();
  }

  getUsers(){
    this.userService.getUsers()
    .subscribe( resp =>{
      this.users = resp;      
      console.log('Usuarios',this.users);
    });    
  }  

  registrar(){
    this.router.navigate(['admin/register']);
  }

}  
