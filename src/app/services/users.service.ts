import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../admin-blog/interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private urlUsers: string = environment.urlUsers;

  constructor(private httpClient: HttpClient) { }

  getUsers(): Observable<User>{
    return this.httpClient.get<User>(`${this.urlUsers}`);
  }
  // getUserPorId(id: string): Observable<User>{
  //   return this.httpClient.get<User>(`${this.urlUsers}`);
  // }
}
