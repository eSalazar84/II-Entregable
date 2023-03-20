export class Tragamonedas {
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
  setIsPlayerWin(): string {
    const machine = ["Siete", "Banana", "Cara_Triste"];
    const slot_1 = machine[Math.floor(Math.random() * machine.length)];
    const slot_2 = machine[Math.floor(Math.random() * machine.length)];
    const slot_3 = machine[Math.floor(Math.random() * machine.length)];
    if (slot_1 === "Siete" && slot_2 === "Siete" && slot_3 === "Siete") {
      return ` Congrats... You Win!!!!`;
    } else {
      return ` Ups... Try Again.....`;
    }
  }
}
