import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private _users!: User[];
  private _userProfile!: User;

  constructor() {
    this._users = JSON.parse(localStorage.getItem('Alumnos')!!);
  }

  get users(): User[] {
    return this._users;
  }

  getUserProfile(): User {
    return this._userProfile;
  }

  setUserProfile(user:User): void {
    this._userProfile = user;
  }

  deleteUser(user:User): User[] {
    this.users.splice(this.users.indexOf(user),1);
    localStorage.setItem('Alumnos', JSON.stringify(this.users));
    return this.users;
  }
}
