import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduto} from '../produtos';
import { ProdutosService } from '../produtos.service';

@Component({
  selector: 'app-produtos',
  templateUrl: './produtos.component.html',
  styleUrls: ['./produtos.component.css']
})
export class ProdutosComponent implements OnInit {

  produtos: IProduto[] | undefined; //CRIANDO VETOR COM OS DADOS DO ARQUIVO PRODUTOS.TS
  
  constructor(
    private produtosService: ProdutosService, //pegando dados pelo serviço! produtos.service
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    const produtos = this.produtosService.getAll();
    this.route.queryParamMap.subscribe(params => {
      const descricao = params.get("descricao")?.toLowerCase();
    //quanto tiver uma mudança nos parametros ele tras os paramentros ! pegando valor da descricao! LowerCase(maiusculo).
        if(descricao)
        {
            this.produtos = produtos.filter(produto => produto.descricao.toLowerCase().includes(descricao));
            return;
        }
        this.produtos=produtos;
    } )
  }

}
