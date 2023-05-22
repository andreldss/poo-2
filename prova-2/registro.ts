import { carro } from "./carro";

export class registro {
    private carro: carro
    private velocidade: number
    private dia: Date

    constructor(carro: carro, velocidade: number, dia: Date) {
        this.carro = carro
        if (velocidade > 105) {
            console.log("O motorista " + carro.getNomeDono() + " foi multado por dirigir " + (velocidade - 105) + "km/h acima do permitido!")
            carro.adicionaInfracao()
        }
        this.velocidade = velocidade
        this.dia = dia
    }

    public getCarro() {
        return this.carro
    }
    public setCarro(carro: carro): void {
        this.carro = carro
    }
    public getVelocidade() {
        return this.velocidade
    }
    public setVelocidade(velocidade: number): void {
        this.velocidade = velocidade
    }
    public getDia() {
        return this.dia
    }
    public setDia(dia: Date): void {
        this.dia = dia
    }

}
