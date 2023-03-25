import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-extracto',
  templateUrl: './extracto.component.html',
  styleUrls: ['./extracto.component.scss']
})
export class ExtractoComponent implements OnInit {

  @Input() texto: string;

  constructor() { }

  ngOnInit(): void {
  }

}
