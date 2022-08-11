import { Component, OnInit } from '@angular/core';
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
    private produtosService: ProdutosService //pegando dados pelo serviço! produtos.service
  ) { }

  ngOnInit(): void {
    this.produtos =this.produtosService.getAll();
  }

}
