import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,HTTP_INTERCEPTORS} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';

@Injectable()
export class MyHttpRequestError implements HttpInterceptor {
  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('passou');
    return next.handle(request)
    .catch((error, caught) => {
        return Observable.throw(error)
    }) as any;
  }
}

export const ErrorInterceptionProvider = {
    provider:HTTP_INTERCEPTORS,
    useClass:MyHttpRequestError,
    multi:true
}