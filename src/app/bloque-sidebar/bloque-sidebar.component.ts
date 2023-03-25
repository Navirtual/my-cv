import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque-sidebar',
  templateUrl: './bloque-sidebar.component.html',
  styleUrls: ['./bloque-sidebar.component.scss']
})
export class BloqueSidebarComponent implements OnInit {

  @Input() public datos: String[];

  @Input() public titulo: String;

  constructor() { }

  ngOnInit(): void { }

}
