export class User {
  foto: string;
  general?: InfoGeneral;
  extracto: string;
  idiomas?: Idiomas;
  laboral: InfoLaboral;
  estudios: InfoEstudios[];
  referencias: Referencia[];
  habilidades: String[];
  software: String[];
}

export class InfoGeneral {
  nombre: string;
  nombre_visible: string;
  fecha_nacimiento: number;
  telefono: number;
  direccion: string;
  comuna: string;
  pais: string;
  email: string;
  linkedin: string;
}

export class Referencia {
  nombre: string;
  cargo: string;
  empresa: string;
  telefono: string;
  email: string;
}

export class InfoLaboral {
  cargo: string;
  empresa: string;
  fecha_inicio: string;
  fecha_fin: string;
  extracto?: string;
  actividades: string[];
}

export class InfoEstudios {
  titulo: string;
  institucion: String;
}

export class Idiomas {
  idioma: Idioma;
  nivel: NivelIdioma;
}

enum Idioma {
  ESP = 'Español',
  ENG = 'Inglés'
}

enum NivelIdioma {
  BASICO = 1,
  MEDIO = 2,
  AVANZADO = 3,
  NATIVO = 4
}
