
import { Injectable } from '@angular/core';
import { ToastController } from 'ionic-angular';

/*
  Show toasts.
*/
@Injectable()
export class ToastProvider {

  constructor(public toastCtrl: ToastController) {
  }

  showToast(message: string) {
    this.toastCtrl.create({
      message,
      position: 'bottom',
      duration: 3000
    }).present();
  }
}
