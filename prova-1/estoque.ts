import { Produto } from "./produto";

export class Estoque {
    private id: number;
    private produto: Produto;
    private quantidade: number;

    constructor(id: number, produto: Produto, quantidade: number) {
        this.id = id;
        this.produto = produto;
        if (this.quantidade <= 0) {
            throw new Error("O valor do unitário não pode ser zero ou negativo!");
        }
        this.quantidade = quantidade;
    }

    public getId(): number {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getProduto(): Produto {
        return this.produto;
    }

    public setProduto(produto: Produto): void {
        this.produto = produto;
    }

    public getQuantidade(): number {
        return this.quantidade;
    }

    public setQuantidade(quantidade: number): void {
        if (quantidade <= 0) {
            throw new Error("O valor do unitário não pode ser zero ou negativo!");
        }
        this.quantidade = quantidade;
    }

    public ValorDoProdutoEmEstoque(): number {
        return this.produto.getValorUnitario() * this.quantidade;
    }

}
