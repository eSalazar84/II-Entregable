import { Tragamonedas } from "./tragamonedas";
import { Ruleta } from "./ruleta";
import { Casino } from "./casino";

const traga_2=new Tragamonedas(`abc234`,`moto`,`black`);

const ruleta_1=new Ruleta(`rovot`,`ruletin`);

const casinojuarez=new Casino(`Casino Juarez`,`Avda San Martin 239, Benito Juarez, Buenos Aires, Argentina`,685986,new Date("2018-09-25"),ruleta_1,traga_2)


console.log(casinojuarez);



