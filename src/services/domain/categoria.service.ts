import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{API_CONFIG} from '../../config/api.config';
import{Categoria} from '../../models/Categoria';
import{Observable} from 'rxjs/Rx';

@(Injectable())
export class CategoriaService{

    constructor(public http: HttpClient){

    }

    findAll():Observable<Categoria[]>{
        return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/categorias`);
    }
}