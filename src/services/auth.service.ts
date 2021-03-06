import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { API_CONFIG } from '../config/api.config';
import { Credenciais } from '../models/Credenciais';
import { LocalUser } from '../models/local-user';
import { StorageService } from './storage.service';
import {JwtHelper} from 'angular2-jwt';
import { CartService } from './cart.service';

@Injectable()
export class AuthService{

    jwtHelper: JwtHelper = new JwtHelper();

    constructor(
        public http: HttpClient, 
        public storage:StorageService,
        public cartService:CartService)
    {

    }

    authenticate(creds:Credenciais){
        return this.http.post(`${API_CONFIG.baseUrl}/login`, creds,
            {
                observe:'response',
                responseType:'text'
            });
    }

    refreshToken(){
        return this.http.post(`${API_CONFIG.baseUrl}/auth/refresh-token`, {},
            {
                observe:'response',
                responseType:'text'
            });
    }

    successfulLogin(authorizationValue:string){
        let responseToken = authorizationValue.substring(7);
        let user:LocalUser = {
            token:responseToken,
            email:this.jwtHelper.decodeToken(responseToken).sub
        };
        this.storage.setLocalUser(user);
        this.storage.setCart(null);
    }

    logout(){
        this.storage.setLocalUser(null);
    }
}