import { Component, Input, OnInit } from '@angular/core';
import { Referencia } from '../user.model';

@Component({
  selector: 'app-referencias',
  templateUrl: './referencias.component.html',
  styleUrls: ['./referencias.component.scss']
})
export class ReferenciasComponent implements OnInit {

  @Input() referencias: Referencia[];

  constructor() { }

  ngOnInit(): void {
  }

}
