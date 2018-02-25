import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { MenuController } from 'ionic-angular/components/app/menu-controller';
import {Credenciais} from '../../models/Credenciais'
import { AuthService } from '../../services/auth.service';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private creds:Credenciais = {
    login:"",
    senha:""
  }


  constructor(public navCtrl: NavController,
     public menuController:MenuController,
     public auth:AuthService
    
  ) {

  }

  ionViewWillEnter(){
    this.menuController.swipeEnable(false);
  }

  ionViewDidLeave(){
    this.menuController.swipeEnable(true);
  }

  login(){
    this.auth.authenticate(this.creds)
    .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriaPage') 
    }, 
    error => {});
  }

  ionViewDidEnter(){
    this.auth.refreshToken()
    .subscribe(response => {
        this.auth.successfulLogin(response.headers.get('Authorization'));
        this.navCtrl.setRoot('CategoriaPage') 
    }, 
    error => {});
  }

  signup(){
    this.navCtrl.push('SignupPage');
  }

}
