import { Injectable } from '@angular/core';
import { IProdutoCarrinho } from './produtos';

@Injectable({
  providedIn: 'root'
})
export class CarrinhoService {

 itens:IProdutoCarrinho[] = [];

  constructor() { }

  obtemCarrinho(){
    this.itens = JSON.parse(localStorage.getItem("carrinho") || "[]"); //JASON.PARSE (STRING TO OBJETO)
    return this.itens;
  }

  adicinarAoCarrinho(produto: IProdutoCarrinho){
    this.itens.push(produto);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));//JASON.STRINGIFY(OBJETO TO STRING)
  }

  limparCarrinho(){
    this.itens = [];
    localStorage.clear();
  }

  removerProtudoCarrinho(produtoId: number){
    this.itens = this.itens.filter(item => item.id !== produtoId);
    localStorage.setItem("carrinho",JSON.stringify(this.itens));//JASON.STRINGIFY(OBJETO TO STRING)
  }
}
