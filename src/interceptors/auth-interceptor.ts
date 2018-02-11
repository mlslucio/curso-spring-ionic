import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,HTTP_INTERCEPTORS} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { StorageService } from '../services/storage.service';
import { Headers } from '@angular/http/src/headers';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(public storage:StorageService){}

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    
    let localUser = this.storage.getLocalUser();    

    if(localUser != null){
        const authReq = request.clone({headers: request.headers.set('Authorization','Bearer '+localUser.token)});
        return next.handle(authReq);
    }else{
        return next.handle(request);
    }
  }
}

export const AuthInterceptorProvider = {
    provide:HTTP_INTERCEPTORS,
    useClass:AuthInterceptor,
    multi:true
};