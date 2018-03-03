import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { CartItem } from '../../models/cart-item';
import {Produto} from '../../models/Produto';
import { CardTitle } from 'ionic-angular/components/card/card-title';

/**
 * Generated class for the CartPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
})
export class CartPage {

  cart:Cart;
  cartItem:CartItem[];
  valorTotal:number;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService:CartService
    ) {
  }

  ionViewDidLoad() {
    this.cart = this.cartService.getCart();
    this.cartItem = this.cart.items; 
  }

  removeProduto(produto:Produto){
    this.cartItem = this.cartService.removeProduto(produto);
  }

  incrementaQtdProduto(produto:Produto){
    this.cartItem = this.cartService.incrementaQtdProduto(produto);
  }

  decrementaQtdProduto(produto:Produto){
    this.cartItem = this.cartService.decrementaQtdProduto(produto);
  }

  getvalorTotal(){
   return this.cartService.getValorTotal();
  }

}
