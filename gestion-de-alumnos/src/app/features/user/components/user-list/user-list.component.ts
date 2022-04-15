import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})

export class UserListComponent{

  displayedColumns = ['name', 'lastname1', 'lastname2', 'dni', 'email', 'buttonOptions'];

  dataSource = new MatTableDataSource<User>(this.userServ.getUsers());

  constructor(private userServ:UserService) { }

  ngAfterViewInit() {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(user:User){
    const oldData = this.userServ.getUsers() || [];
    if(oldData.indexOf(user)<0){
      oldData.splice(0,1);
    }
    else{
      oldData.splice(oldData.indexOf(user),1);
    }
    
    localStorage.setItem('Alumnos', JSON.stringify(oldData));
  }

  openProfile(user:User){
    console.log(user);
  }
}
