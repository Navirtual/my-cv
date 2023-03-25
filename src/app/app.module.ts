import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ExtractoComponent } from './extracto/extracto.component';
import { TrabajoComponent } from './trabajo/trabajo.component';
import { FechaActualidadPipe } from './fecha-actualidad.pipe';
import { EducacionComponent } from './educacion/educacion.component';
import { TitleSectionComponent } from './title-section/title-section.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ReferenciasComponent } from './referencias/referencias.component';
import { BloqueSidebarComponent } from './bloque-sidebar/bloque-sidebar.component';
import { BloqueSkillsComponent } from './bloque-skills/bloque-skills.component';

@NgModule({
  declarations: [
    AppComponent,
    ExtractoComponent,
    TrabajoComponent,
    FechaActualidadPipe,
    EducacionComponent,
    TitleSectionComponent,
    ContactoComponent,
    ReferenciasComponent,
    BloqueSidebarComponent,
    BloqueSkillsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
