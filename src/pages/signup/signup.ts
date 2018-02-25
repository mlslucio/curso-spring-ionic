import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder,Validators} from '@angular/forms';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';
import { Estado } from '../../models/Estado';
import { Cidade } from '../../models/Cidade';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  estados:Estado[];
  cidades:Cidade[];

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder:FormBuilder,
    public cidadeService:CidadeService,
    public estadoService:EstadoService

  ) {
      this.formGroup = this.formBuilder.group({
        nome:['',[Validators.required, Validators.minLength(5), Validators.maxLength(120)]],
        email:['',[Validators.required, Validators.email]],
        estado:['',[Validators.required]],
        cidade:['',[Validators.required]],
        tipo_pessoa:['',[Validators.required]]

      });
  }

  formGroup:FormGroup;

  ionViewDidLoad() {
    this.estadoService.estadosPorPais(1).subscribe(response => {
      this.estados = response;
    
      this.formGroup.controls.estado.setValue(this.estados[0].id);
      this.updateCidades();
    })
  }

  signupUser(){
    console.log("criado");
  }

  updateCidades(){
    let estadoId = this.formGroup.value.estado;
    this.cidadeService.cidadesPorEstado(estadoId)
    .subscribe(response => {
      this.cidades = response;
      this.formGroup.controls.cidade.setValue(null);
    })
  }

}
