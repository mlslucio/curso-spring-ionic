import { Injectable } from '@angular/core';
import { HttpInterceptor,HttpRequest,HttpHandler,HttpEvent,HTTP_INTERCEPTORS} from '@angular/common/http';

import { Observable } from 'rxjs/Rx';
import { StorageService } from '../services/storage.service';
import { AlertController } from 'ionic-angular/components/alert/alert-controller';

@Injectable()
export class MyHttpRequestError implements HttpInterceptor {

  constructor(public storage:StorageService, public alertCtrl: AlertController){}

  intercept(request: HttpRequest<any>,next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request)
    .catch((error, caught) => {

      let errorRecebido = error;

      if(errorRecebido.error){
        errorRecebido = error;
      }
      if(!error.status){
        errorRecebido = JSON.parse(errorRecebido);
      }

      console.log("Erro detectado: "+errorRecebido.message);

      switch(errorRecebido.status){
        case 403:
          this.handle403();
        break;

        case 401:
          this.handle401();
        break;

        default:
          this.handleDefaultError();
        break;
      }

        return Observable.throw(error)
    }) as any;
  }

  handle403(){
    this.storage.setLocalUser(null);
  }

  handle401(){
    let alert = this.alertCtrl.create({
      title:'Falha na Autenticação',
      message:'Email/Senha Incorretos',
      buttons:[
        {'text':'Fechar'}
      ]
    });
    alert.present();
  }

  handleDefaultError(objError){
     let alert = this.alertCtrl.create({
      title:'Ocorreu Um Erro',
      message:'Tente Novamente',
      buttons:[
        {'text':'Fechar'}
      ]
    });
    alert.present();
  }

}

export const ErrorInterceptionProvider = {
    provide:HTTP_INTERCEPTORS,
    useClass:MyHttpRequestError,
    multi:true
}