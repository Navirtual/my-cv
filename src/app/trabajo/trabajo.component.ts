import { Component, OnInit, Input } from '@angular/core';
import { InfoLaboral } from '../user.model';

@Component({
  selector: 'app-trabajo',
  templateUrl: './trabajo.component.html',
  styleUrls: ['./trabajo.component.scss']
})

export class TrabajoComponent implements OnInit {

  @Input() trabajos: InfoLaboral[];

  constructor() { }

  ngOnInit(): void {
  }

}
