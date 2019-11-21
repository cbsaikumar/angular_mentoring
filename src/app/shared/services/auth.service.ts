import { Injectable } from '@angular/core';
import { IUser } from 'src/app/models/iUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: IUser){
    sessionStorage.setItem('user', JSON.stringify(user));
  }

  logout(){
    sessionStorage.removeItem('user');
  }

  isAuthenticated(): boolean{
    return sessionStorage.getItem('user') ? true : false;
  }

  getUserInfo(): IUser{
    return JSON.parse(sessionStorage.getItem('user'));
  }
}
