import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {StorageService} from '../../services/storage.service';
import { Usuario } from '../../models/Usuario';
import { UsuarioService } from '../../services/domain/usuario.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  usuario:Usuario;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public storage:StorageService,
    public usuarioService:UsuarioService
  ) {
  }

  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    if(localUser != null && localUser.email != null){
      this.usuarioService.findByEmail(localUser.email)
      .subscribe(response => {
        this.usuario = response;
      }, error => {
        if(error.status == 403)
          this.navCtrl.setRoot('HomePage');
      })
  }else{
    this.navCtrl.setRoot('HomePage');
  }

}
}
