import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import{API_CONFIG} from '../../config/api.config';
import{Categoria} from '../../models/Categoria';
import{Observable} from 'rxjs/Rx';
import { Estado } from '../../models/Estado';

@(Injectable())
export class EstadoService{

    constructor(public http: HttpClient){

    }

    estadosPorPais(idPais:number):Observable<Estado[]>{
        return this.http.get<Estado[]>(`${API_CONFIG.baseUrl}/estados/${idPais}/porpais`);
    }
}