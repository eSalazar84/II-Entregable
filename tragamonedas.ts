import { JuegoDeCasino } from "./juegoDeCasino";
import readlineSync from "readline-sync";

export class Tragamonedas extends JuegoDeCasino {
  private color: string;
  constructor(id: string, fabricante: string, color: string) {
    super(id, fabricante);
    this.color = color;
  }
  getInfoTragamonedas(): string {
    return `
    Description: ${this.id}
    Fabricante: ${this.fabricante}
    Color: ${this.color}
    `;
  }
  setIsPlayerWin(): string {
    const machine = ["Siete", "Banana", "Cara_Triste"];
    let fichas: number = Number(
      readlineSync.question(`cuantas fichas va a jugar?`)
    );
    let accum: number = 0;
    let pozo: number = 0;
    for (let i = 0; i < fichas; i++) {
      const slot_1: string =
        machine[Math.floor(Math.random() * machine.length)];
      const slot_2: string =
        machine[Math.floor(Math.random() * machine.length)];
      const slot_3: string =
        machine[Math.floor(Math.random() * machine.length)];
      if (slot_1 === "Siete" && slot_2 === "Siete" && slot_3 === "Siete") {
        console.log(`Congrats... You Win!!!`);
        return ` Tu saldo es de USD ${pozo}.-`;
      } else {
        pozo=pozo+5
        console.log(`Ups... Try Again...`);
      }
    }
    return ` Tu saldo es de USD ${accum}.-`;
  }
}
