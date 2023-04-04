import { Fornecedor } from "./fornecedor";

export class Produto {
    private id: number;
    private descricao: string;
    protected fornecedor: Fornecedor;
    private valorUnitario: number;

    constructor(id: number, descricao: string, fornecedor: Fornecedor, valorUnitario: number) {
        this.id = id;
        this.descricao = descricao;
        this.fornecedor = fornecedor;
        if (valorUnitario <= 0) {
            throw new Error("O valor do unitário não pode ser zero ou negativo!");
        }
        this.valorUnitario = valorUnitario;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getDescricao(): string {
        return this.descricao;
    }

    public setDescricao(descricao: string): void {
        this.descricao = descricao;
    }

    public getValorUnitario(): number {
        return this.valorUnitario;
    }

    public setValorUnitario(valorUnitario: number): void {
        if (valorUnitario <= 0) {
            throw new Error("O valor do unitário não pode ser zero ou negativo!");
        }
        this.valorUnitario = valorUnitario;
    }

    public getFornecedor(): Fornecedor {
        return this.fornecedor;
    }
}
