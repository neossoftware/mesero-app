import { Injectable } from '@angular/core';
import { Plato } from './../_model/plato';

@Injectable()
export class PlatoService {
platos: Plato[] = [
  new Plato(1,'Hamburguesa','http://',25.6),
  new Plato(1,'Hot Dog','http://',25.6)
];

  constructor() { }

}
