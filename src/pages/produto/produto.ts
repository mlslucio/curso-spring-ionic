import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Produto } from '../../models/Produto';
import { ProdutoService } from '../../services/domain/produto.service';

/**
 * Generated class for the ProdutoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produto',
  templateUrl: 'produto.html',
})
export class ProdutoPage {

  produtos:Produto[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public produtoService:ProdutoService
  ) {
  }

  ionViewDidLoad() {
    let categoriaId = this.navParams.get('categoriaId');
    this.produtoService.getProdutosPorCategoria(categoriaId).subscribe(response => {
      this.produtos = response['content'];
    },error =>{

  });
  }

  verDetalhes(produto:Produto){
    this.navCtrl.push('ProdutoDetalhePage', {produtoId:produto.id});
  }

}
