import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  _users!: User[];

  constructor() {
    this._users = JSON.parse(localStorage.getItem('Alumnos')!!);
  }

  get users(): User[] {
    return this._users;
  }

  deleteUser(user:User): User[] {
    this.users.splice(this.users.indexOf(user),1);
    localStorage.setItem('Alumnos', JSON.stringify(this.users));
    return this.users;
  }
}
