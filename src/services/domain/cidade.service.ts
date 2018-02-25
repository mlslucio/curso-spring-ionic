import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{API_CONFIG} from '../../config/api.config';
import{Categoria} from '../../models/Categoria';
import{Observable} from 'rxjs/Rx';
import { Cidade } from '../../models/Cidade';

@(Injectable())
export class CidadeService{

    constructor(public http: HttpClient){

    }

    cidadesPorEstado(estadoId:string):Observable<Cidade[]>{
        return this.http.get<Categoria[]>(`${API_CONFIG.baseUrl}/cidades/${estadoId}/porestado`);
    }
}