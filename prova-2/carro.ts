import { motorista } from "./motorista"

export class carro {
    private placa: string
    private dono: motorista

    constructor(placa: string, dono: motorista) {
        this.placa = placa
        this.dono = dono
    }

    public getPlaca() {
        return this.placa
    }
    public setPlaca(placa: string): void {
        this.placa = placa
    }
    public getDono() {
        return this.dono
    }
    public setDono(dono: motorista): void {
        this.dono = dono
    }
    public getNomeDono() {
        return this.dono.getNome()
    }
    public adicionaInfracao(): void {
        this.dono.setInfracoes(this.dono.getInfracoes() + 1)
    }
}
