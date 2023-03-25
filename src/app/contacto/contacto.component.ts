import { Component, Input, OnInit } from '@angular/core';
import { InfoGeneral } from '../user.model';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {

  @Input() datos: InfoGeneral;

  @Input() title: String;

  constructor() { }

  ngOnInit(): void {
  }

}
