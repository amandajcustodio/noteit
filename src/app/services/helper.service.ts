import { Injectable } from "@angular/core";
import { AlertController, AlertButton, ToastController } from "@ionic/angular";

@Injectable({
    providedIn: 'root',
})

export class HelperService {
    constructor(
        private readonly toastController: ToastController,
        private readonly alertController: AlertController,
    ){}
    
    public async showToast(message: string, durationInMilliseconds: number = 2000): Promise<void> {
    const toast = await this.toastController.create({
        message: message,
        duration: durationInMilliseconds,
      });
      toast.present();
    }

    public async showAlert(header: string, buttons: (AlertButton | string)[]): Promise<void> {
        const alert = await this.alertController.create({
            header,
            buttons,
          })
          alert.present();
    }
}

