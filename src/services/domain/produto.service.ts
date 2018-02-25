import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{API_CONFIG} from '../../config/api.config';
import{Categoria} from '../../models/Categoria';
import{Observable} from 'rxjs/Rx';
import { Estado } from '../../models/Estado';
import { Produto } from '../../models/Produto';

@(Injectable())
export class ProdutoService{

    constructor(public http: HttpClient){

    }

    getProdutosPorCategoria(idCategoria:string){
        return this.http.get(`${API_CONFIG.baseUrl}/produtos?categorias=${idCategoria}`)
    }

    getProdutoPorId(idProduto:string){
        return this.http.get<Produto>(`${API_CONFIG.baseUrl}/produtos/${idProduto}`)
    }
}