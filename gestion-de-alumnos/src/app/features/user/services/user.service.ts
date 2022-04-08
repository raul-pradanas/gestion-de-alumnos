import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user! : User;
  
  constructor() { }

  getUser(): User| undefined{
    return this.user;
  }

  getUsers(): User[] | undefined{
    return JSON.parse(localStorage.getItem('Alumnos')!!);
  }

  deleteUser():void {
    
  }
}
