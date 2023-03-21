import { JuegoDeCasino } from "./juegoDeCasino";

export class Ruleta extends JuegoDeCasino {
  private premio: number;
  constructor(id: string, fabricante: string, premio: number) {
    super(id, fabricante);
    this.premio = premio;
  }
  getInfoRuleta(): Ruleta {
    return this;
  }
}
