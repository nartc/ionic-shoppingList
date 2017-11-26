import { ToastController } from 'ionic-angular';
import { Injectable } from '@angular/core';
@Injectable()
export class ToastService {
  constructor(private toastController: ToastController) {}

  show(message: string, duration: number = 3000) {
    return this.toastController.create({
      message,
      duration
    })
    .present();
  }
}
