import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CartService } from '../../services/cart.service';
import { Cart } from '../../models/cart';
import { CartItem } from '../../models/cart-item';

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

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public cartService:CartService
    ) {
  }
''
  ionViewDidLoad() {
    this.cart = this.cartService.getCart();
    this.cartItem = this.cart.items;
  }

}
