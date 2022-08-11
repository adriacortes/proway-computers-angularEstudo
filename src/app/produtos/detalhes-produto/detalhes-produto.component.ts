import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NotificacaoService } from 'src/app/notificacao.service';
import { IProduto } from 'src/app/produtos';
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
    private notificacaoService: NotificacaoService
  ) { }

  ngOnInit(): void {
    const routeParams=this.route.snapshot.paramMap;//Pega os parametos da rota
    const produtoID = Number(routeParams.get("id"));
    this.produto = this.produtosService.getOne(produtoID);
  }

  adicionarAoCarrinho(){
  this.notificacaoService.notificar("Produto adicionado ao carrinho com sucesso!")
  }

}
