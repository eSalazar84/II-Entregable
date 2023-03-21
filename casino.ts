import { Ruleta } from "./ruleta";
import { Tragamonedas } from "./tragamonedas";

export class Casino {
  private nombreDeFantasia: string;
  private ubicacion: string;
  private numHabilitacion: number;
  private inicioActividades: Date;
  private ruleta: Ruleta;
  private tragamoneda: Tragamonedas;
  constructor(
    nombreDeFantasia: string,
    ubicacion: string,
    numHabilitacion: number,
    inicioActividades: Date,
    ruleta: Ruleta,
    tragamoneda: Tragamonedas
  ) {
    this.nombreDeFantasia = nombreDeFantasia;
    this.ubicacion = ubicacion;
    this.numHabilitacion = numHabilitacion;
    this.inicioActividades = inicioActividades;
    this.ruleta = ruleta;
    this.tragamoneda = tragamoneda;
  }
  getInfo(): Casino {
    return this;
  }
}
