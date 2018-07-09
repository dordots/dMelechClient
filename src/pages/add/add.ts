import { Component } from '@angular/core';
import { NavController, NavParams , ModalController} from 'ionic-angular';
import { AddMinyanComponent } from '../../components/add-minyan/add-minyan';

/**
 * add new synagogue/ lesson / mikve
 */

@Component({
  selector: 'page-add',
  templateUrl: 'add.html',
})
export class AddPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, private alertCtrl: AlertController, private modalCtrl : ModalController) {
    
  }

  showModal() {
    let timepickModal = this.modalCtrl.create(AddMinyanComponent);
    timepickModal.present();
  }
  
}