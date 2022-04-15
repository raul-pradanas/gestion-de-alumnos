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
        _name: 'Raúl',
        _lastname1: 'Pradanas',
        _lastname2: 'Martin',
        _email: 'r@gmail.com',
        _dni: '54002937H',
        _phone: '685584362',
        _anotherPhone:'609989472',
        _country: 'España',
        _province: 'Madrid',
        _postalCode: 28890,
        _locality: 'Loeches',
        _nickname: 'RaulP10'

      },
      {
        _name: 'Adrián',
        _lastname1: 'Martín',
        _lastname2: 'Benito',
        _email: 'a@gmail.com',
        _dni: '54002937L',
        _phone: '685584362',
        _anotherPhone:'609989472',
        _country: 'España',
        _province: 'Madrid',
        _postalCode: 28890,
        _locality: 'Loeches',
        _nickname: 'ADRI'
      },
    ]));
  }
}
