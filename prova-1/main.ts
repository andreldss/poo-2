import { Fornecedor } from "./fornecedor";
import { Produto } from "./produto";
import { Estoque } from "./estoque";

let forn1 = new Fornecedor(1, "Fornecedor1", "112.043.929-94", "(48)99838 4838", "rua 3");
console.log(forn1);
let prod1 = new Produto(1, "Produto1", forn1, 2.5);
console.log(prod1);
let estoque1 = new Estoque(1, prod1, 5);
console.log(estoque1.ValorDoProdutoEmEstoque());
