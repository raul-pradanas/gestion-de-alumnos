import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  user! : User;
  
  constructor() { }

  getUser(): User{
    return this.user;
  }

  setUser(nUser:User) : void{
    this.user = nUser;
  }

  getUsers(): User[] | undefined{
    return JSON.parse(localStorage.getItem('Alumnos')!!);
  }

  deleteUser():void {
    
  }
}
