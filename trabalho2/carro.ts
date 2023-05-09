export class Carro {
    private placa: String
    private quilometragem: number

    constructor(placa: String, quilometragem: number) {
        this.placa = placa
        this.quilometragem = quilometragem
    }

    public getPlaca(): String {
        return this.placa;
    }

    public setPlaca(placa: String): void {
        this.placa = placa;
    }
    public getKm(): number {
        return this.quilometragem;
    }
    public setKm(quilometragem: number): void {
        this.quilometragem = quilometragem;
    }
}
