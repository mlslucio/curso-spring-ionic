import{Injectable} from '@angular/core';
import { STORAGE_KEYS } from '../config/storage';
import {Cart} from '../models/cart';
import {StorageService} from './storage.service';
import { Produto } from '../models/Produto';

@Injectable()
export class CartService{

    constructor(public storage:StorageService){}

    createOrClearCart(){
        let cart:Cart = {items:[]};
        this.storage.setCart(cart);
        return cart;
    }

    getCart(){
        if(this.storage.getCart() != null)
            return this.storage.getCart();
        else
            return this.createOrClearCart();  
    }

    addProduto(produto:Produto){

       let cart:Cart = this.getCart();
       
       let position = cart.items.findIndex(x => x.produto.id == produto.id);

       if(position == -1)
        cart.items.push({quantidade:1, produto: produto});

       this.storage.setCart(cart);

    }
} 