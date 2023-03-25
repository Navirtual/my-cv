import { Component, OnInit } from '@angular/core';
import { Service } from './app.services';
import { User } from './user.model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit {

  private usuario = 'ia';
  private idioma = 'es';
  public user: User;

  public title_skills: String;
  public title_software: String;
  public title_interest: String;
  public title_profile: String;
  public title_workExp: String;
  public title_education: String;
  public title_contact: String;

  constructor(private service: Service) {
    this.title_software = 'Software';
    this.title_skills = (this.idioma === 'es') ? 'Habilidades' : 'Skills';
    this.title_interest = (this.idioma === 'es') ? 'Intereses' : 'Interests';
    this.title_profile = (this.idioma === 'es') ? 'Acerca de mi' : 'Profile';
    this.title_workExp = (this.idioma === 'es') ? 'Mis trabajos' : 'Work Experience';
    this.title_education = (this.idioma === 'es') ? 'Educación' : 'Education';
    this.title_contact = (this.idioma === 'es') ? 'Contacto' : 'Contact';
  }

  ngOnInit() {

    this.service.obtenerJson(this.usuario, this.idioma).subscribe((response: User) => {
      this.user = response;
      this.user.foto = this.usuario.concat('.jpeg');
    });
  }

}
