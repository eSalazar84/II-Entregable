import { Tragamonedas } from "./tragamonedas";
import { Ruleta } from "./ruleta";

export class JuegoDeCasino {
  protected id: string;
  protected fabricante: string;
  private ruleta: Ruleta[];
  private tragamonedas: Tragamonedas[];
  constructor(id: string, fabricante: string) {
    this.id = id;
    this.fabricante = fabricante;
    this.ruleta=[]
    this.tragamonedas=[]
  }
  getInfo(): string {
    return `
    Id: ${this.id}
    Fabricante: ${this.fabricante}
    `;
  } 
  setRuleta(juegoRuleta: Ruleta):Ruleta[] {
    this.ruleta.push(juegoRuleta);
    return this.ruleta
  }
  setTragamonedas(juegoTragamoneda: Tragamonedas) {
    this.tragamonedas.push(juegoTragamoneda);
    return this.tragamonedas
  } 
}
