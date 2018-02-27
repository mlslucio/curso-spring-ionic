import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../models/Produto';
import {ProdutoService} from '../../services/domain/produto.service';
import { CartService } from '../../services/cart.service';

@IonicPage()
@Component({
  selector: 'page-produto-detalhe',
  templateUrl: 'produto-detalhe.html',
})
export class ProdutoDetalhePage {

  private produtoId: string;
  private produto:Produto;

  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     public produtoService:ProdutoService,
     public cartService:CartService
  ) {
  }

  ionViewDidLoad() {
    this.produtoId = this.navParams.get('produtoId'); 
    this.produtoService.getProdutoPorId(this.produtoId)
    .subscribe(response => {
      this.produto = response;
    }),error => {

    }
  }

  addToCart(produto:Produto){
    this.cartService.addProduto(produto);
    this.navCtrl.setRoot('CartPage');
  }

}
