import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class Service {

  constructor(private httpClient: HttpClient) { }

  obtenerJson(iniciales: string, idioma?: string): Observable<any> {
    const stringParams = iniciales + ((idioma) ? '-' + idioma : '');
    return this.httpClient.get('assets/' + stringParams + '.json');
  }

}
