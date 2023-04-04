export class Fornecedor {
    private id: number;
    private nomeRazaoSocial: string;
    private cpfCnpj: string;
    private telefone: string;
    private endereco: string;

    constructor(
        id: number,
        nomeRazaoSocial: string,
        cpfCnpj: string,
        telefone: string,
        endereco: string
    ) {
        this.id = id;
        this.nomeRazaoSocial = nomeRazaoSocial;
        this.cpfCnpj = cpfCnpj;
        this.telefone = telefone;
        this.endereco = endereco;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getNomeRazaoSocial(): string {
        return this.nomeRazaoSocial;
    }

    public setNomeRazaoSocial(nomeRazaoSocial: string): void {
        this.nomeRazaoSocial = nomeRazaoSocial;
    }

    public getCpfCnpj(): string {
        return this.cpfCnpj;
    }

    public setCpfCnpj(cpfCnpj: string): void {
        this.cpfCnpj = cpfCnpj;
    }

    public getTelefone(): string {
        return this.telefone;
    }

    public setTelefone(telefone: string): void {
        this.telefone = telefone;
    }

    public getEndereco(): string {
        return this.endereco;
    }

    public setEndereco(endereco: string): void {
        this.endereco = endereco;
    }
}
