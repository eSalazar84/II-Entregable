export class JuegoDeCasino {
  protected id: string;
  protected fabricante: string;

  constructor(id: string, fabricante: string) {
    this.id = id;
    this.fabricante = fabricante;
  }
  getInfo(): JuegoDeCasino {
    return this;
  }
}
