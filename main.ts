import { Tragamonedas } from "./tragamonedas";
import { Ruleta } from "./ruleta";
import { Casino } from "./casino";

const traga_2=new Tragamonedas(`abc234`,`moto`,`black`);

const ruleta_1=new Ruleta(`rovot`,`ruletin`,1200000);

const casinojuarez=new Casino(`Casino Juarez`,`Avda San Martin 239, Benito Juarez, Buenos Aires, Argentina`,685986,new Date("2018-09-25"),ruleta_1,traga_2)


console.log(casinojuarez);
















/* 
propiedades-------
private ruleta: Ruleta[];
private tragamonedas: Tragamonedas[];
constructor-------
this.ruleta=[]
this.tragamonedas=[]
metodos-----------
setRuleta(juegoRuleta: Ruleta):Ruleta[] {
    this.ruleta.push(juegoRuleta);
    return this.ruleta
}
setTragamonedas(juegoTragamoneda: Tragamonedas) {
   this.tragamonedas.push(juegoTragamoneda);
   return this.tragamonedas
} 


*/