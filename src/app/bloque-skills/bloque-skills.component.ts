import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-bloque-skills',
  templateUrl: './bloque-skills.component.html',
  styleUrls: ['./bloque-skills.component.scss']
})
export class BloqueSkillsComponent implements OnInit {

  @Input() public datos: any[];

  @Input() public titulo: String;

  constructor() { }

  ngOnInit(): void { }

}
