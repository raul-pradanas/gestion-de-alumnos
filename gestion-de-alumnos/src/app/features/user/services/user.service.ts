import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  _users!: User[];
  _userProfile!: User;

  constructor() {
    this._users = JSON.parse(localStorage.getItem('Alumnos')!!);
  }

  get users(): User[] {
    return this._users;
  }

  get userProfile(): User {
    return this._userProfile;
  }

  setuserProfile(user:User): void {
    this._userProfile = user;
    console.log(this._userProfile);
  }

  deleteUser(user:User): User[] {
    this.users.splice(this.users.indexOf(user),1);
    localStorage.setItem('Alumnos', JSON.stringify(this.users));
    return this.users;
  }
}
