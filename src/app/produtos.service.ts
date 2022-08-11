import { Injectable } from '@angular/core';
import { IProduto, produtos } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  produtos: IProduto[] = produtos; //produtos-lista de produtos no arq produtos.ts

  constructor() { }

  getAll(){
    return this.produtos;
  }

  getOne(produtoId:number){
    return this.produtos.find(produto => produto.id = produtoId)
  }
  
}
