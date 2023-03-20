import { Ruleta } from "./ruleta";
import { Tragamonedas } from "./tragamonedas";

export class Casino {
  private nombreDeFantasia: string;
  private ubicacion: string;
  private numHabilitacion: number;
  private inicioActividades: Date;
  private ruleta: Ruleta;
  private tragamonedas: Tragamonedas;
  constructor(nombreDeFantasia: string,ubicacion: string,numHabilitacion: number,inicioActividades: Date,ruleta: Ruleta,tragamonedas: Tragamonedas) {
    this.nombreDeFantasia = nombreDeFantasia;
    this.ubicacion = ubicacion;
    this.numHabilitacion = numHabilitacion;
    this.inicioActividades = inicioActividades;
    this.ruleta = ruleta;
    this.tragamonedas = tragamonedas;
  }
  private dateFormat(date: Date): string {
    return date.toLocaleDateString("es-AR");
  }
  getInfo(): string {
    return `
        Nombre de Fantasia:    ${this.nombreDeFantasia}
        Ubicacion del Est.:    ${this.ubicacion}
        Num. de Habilitacion:  ${this.numHabilitacion}
        Inicio de Actividades: ${this.dateFormat(
          this.inicioActividades
        )}        
        Juegos que la componen:
            Ruletas:      ${this.ruleta}
            Tragamonedas: ${this.tragamonedas}
        `;
  }
}
