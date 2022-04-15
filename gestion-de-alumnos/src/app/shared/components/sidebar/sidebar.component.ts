import { Component, OnInit } from '@angular/core';
import { Window } from '../../models/Window';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  windows: Window[] = [
    { icon: "backup", name: "Añadir usuarios", url: '/users' },
    { icon: "people", name: "Usuarios", url: '/viewUsers' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
}

