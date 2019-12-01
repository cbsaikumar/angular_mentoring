import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/iUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: IUser){
    localStorage.setItem('user', JSON.stringify(user));
  }

  logout(){
    localStorage.removeItem('user');
  }

  isAuthenticated(): boolean{
    return localStorage.getItem('user') ? true : false;
  }

  getUserInfo(): IUser{
    return JSON.parse(localStorage.getItem('user'));
  }
}
