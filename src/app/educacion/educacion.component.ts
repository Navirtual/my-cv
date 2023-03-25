import { Component, Input, OnInit } from '@angular/core';
import { InfoEstudios } from '../user.model';

@Component({
  selector: 'app-educacion',
  templateUrl: './educacion.component.html',
  styleUrls: ['./educacion.component.scss']
})
export class EducacionComponent implements OnInit {

  @Input() estudios: InfoEstudios[];

  constructor() { }

  ngOnInit(): void {
  }

}
