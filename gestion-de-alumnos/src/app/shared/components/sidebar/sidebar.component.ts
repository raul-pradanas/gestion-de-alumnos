import { Component, OnInit } from '@angular/core';
import { Window } from '../../models/Window';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  windows: Window[] = [
    { icon: "people", name: "Users", url: '/users' },
    { icon: "backup", name: "ViewUsers", url: '/viewUsers' },
  ];

  constructor() { }

  ngOnInit(): void {
  }
  
}

