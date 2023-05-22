export class motorista {
    private cpf: number
    private nome: string
    private infracoes: number

    constructor(cpf: number, nome: string, infracoes: number) {
        this.cpf = cpf
        this.nome = nome
        this.infracoes = infracoes
    }

    public getCpf() {
        return this.cpf
    }
    public setCpf(cpf: number): void {
        this.cpf = cpf
    }
    public getNome() {
        return this.nome
    }
    public setNome(nome: string): void {
        this.nome = nome
    }
    public getInfracoes() {
        return this.infracoes
    }
    public setInfracoes(infracoes: number): void {
        this.infracoes = infracoes
    }
}
