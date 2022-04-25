import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss'],
})
export class UserListComponent {
  displayedColumns = [
    'name',
    'lastname1',
    'lastname2',
    'dni',
    'email',
    'buttonOptions',
  ];

  users!: User[];
  dataSource = new MatTableDataSource<User>(this.userServ.users);

  constructor(private userServ: UserService, private router:Router) {
    this.users = this.userServ.users;
  }

  ngAfterViewInit() {}

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(user: User) {
    this.users = this.userServ.deleteUser(user);
    this.dataSource = new MatTableDataSource<User>(this.users);
  }

  openProfile(user: User) {
    this.userServ.setUserProfile(user);
    this.router.navigate(['/userProfile']);
  }
}
