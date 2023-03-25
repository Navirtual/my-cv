import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaActualidad'
})
export class FechaActualidadPipe implements PipeTransform {

  transform(value: unknown): unknown {
    return (value === "") ? "Present" : value;
  }

}
