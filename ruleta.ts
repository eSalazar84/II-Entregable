export class Ruleta {
  private id: string;
  private fabricante: string;

  constructor(id: string, fabricante: string) {
    this.id = id;
    this.fabricante = fabricante;
  }
  getInfo() {
    return `
    Description: ${this.id}
    Fabricante: ${this.fabricante}
    `;
  }
  
}
