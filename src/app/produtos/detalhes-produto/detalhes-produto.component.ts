import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarrinhoService } from 'src/app/carrinho.service';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto, IProdutoCarrinho } from 'src/app/produtos';
import { ProdutosService } from 'src/app/produtos.service';


@Component({
  selector: 'app-detalhes-produto',
  templateUrl: './detalhes-produto.component.html',
  styleUrls: ['./detalhes-produto.component.css']
})
export class DetalhesProdutoComponent implements OnInit {

  produto: IProduto | undefined;
  quantidade = 1;


  constructor(
    private produtosService: ProdutosService ,//pegando dados pelo serviço! produtos.service
    private route: ActivatedRoute,
    private notificacaoService: NotificacaoService,
    private carrinhoService: CarrinhoService
  ) { }

  ngOnInit(): void {
    const routeParams=this.route.snapshot.paramMap;//Pega os parametos da rota
    const produtoID = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoID);
  }

  adicionarAoCarrinho(){
    this.notificacaoService.notificar("Produto adicionado ao carrinho com sucesso!")
    const produto: IProdutoCarrinho = {
      ...this.produto!,
      quantidade: this.quantidade
    }
    this.carrinhoService.adicinarAoCarrinho(produto);
  }

}
