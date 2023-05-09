import { Carro } from "./carro";

export class Entrada {
    private carro: Carro;
    private diatanciaPercorrida: number
    private litragem: number
    private valorCombustivel: number

    constructor(carro: Carro, diatanciaPercorrida: number, litragem: number, valorCombustivel: number) {
        this.carro = carro
        this.diatanciaPercorrida = diatanciaPercorrida
        this.litragem = litragem
        this.valorCombustivel = valorCombustivel
        this.carro.setKm(diatanciaPercorrida + this.carro.getKm())
    }

    public getCarro(): Carro {
        return this.carro;
    }

    public setCarro(carro: Carro): void {
        this.carro = carro;
    }
    public getDistancia(): number {
        return this.diatanciaPercorrida;
    }

    public setDistancia(diatanciaPercorrida: number): void {
        this.diatanciaPercorrida = this.diatanciaPercorrida;
    }
    public getLitragem(): number {
        return this.litragem;
    }

    public setLitragem(litragem: number): void {
        this.litragem = litragem;
    }
    public getValor(): number {
        return this.valorCombustivel;
    }

    public setValor(valorCombustivel: number): void {
        this.valorCombustivel = valorCombustivel;
    }
}
