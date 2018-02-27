import{Injectable} from '@angular/core';
import { LocalUser } from '../models/local-user';
import { STORAGE_KEYS } from '../config/storage';
import {Cart} from '../models/cart';

@Injectable()
export class StorageService{

    getLocalUser(){
        let user = localStorage.getItem(STORAGE_KEYS.localUser);
        return JSON.parse(user);
    }

    setLocalUser(user:LocalUser){
        localStorage.setItem(STORAGE_KEYS.localUser, JSON.stringify(user))
    }

    getCart(){
        let cart = localStorage.getItem(STORAGE_KEYS.cart);
        return JSON.parse(cart);
    }

    setCart(cart:Cart){
        localStorage.setItem(STORAGE_KEYS.cart, JSON.stringify(cart))
    }
}