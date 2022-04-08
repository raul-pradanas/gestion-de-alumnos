import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'gestion-de-alumnos';

  @ViewChild('drawer') drawer!: MatDrawer;

  onClickMenuButton(): void {
    this.drawer?.toggle();
  }

  ngOnInit(): void {
    this.introducirDatos();
  }

  introducirDatos(): void {
    localStorage.setItem('Alumnos', 
    JSON.stringify(
      [
      {
        name: 'Raúl',
        lastname1: 'Pradanas',
        lastname2: 'Martin',
        email: 'r@gmail.com',
        dni: '54002937H',
      },
      {
        name: 'Adrián',
        lastname1: 'Martín',
        lastname2: 'Benito',
        email: 'a@gmail.com',
        dni: '54002937L',
      },
    ]));
  }
}
