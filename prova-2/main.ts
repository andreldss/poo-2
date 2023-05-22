import { motorista } from "./motorista"
import { carro } from "./carro";
import { registro } from "./registro";

let date = new Date()
let pessoa1 = new motorista(11204392994, "André", 0)
let carro1 = new carro("ABC123ABC", pessoa1)
console.log(pessoa1)
let registro1 = new registro(carro1, 110, date)
console.log(pessoa1)
