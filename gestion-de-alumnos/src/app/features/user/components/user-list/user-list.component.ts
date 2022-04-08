import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/User';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent{

  displayedColumns = ['name', 'lastname1', 'lastname2', 'dni'];

  readonly ELEMENT_DATA: User[] = [
    new User("raul","Pradanas","Martin","r@gmail.com"),
    new User("raul","Pradanas","Martin","r@gmail.com"),
    new User("raul","Pradanas","Martin","r@gmail.com"),
  ]

  dataSource = new MatTableDataSource<User>(this.ELEMENT_DATA);

  constructor() { }

  ngAfterViewInit() {
  }
}
