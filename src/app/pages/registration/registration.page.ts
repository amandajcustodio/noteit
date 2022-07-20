import { Component} from '@angular/core';
import { RegistrationPayload } from 'src/app/models/payloads/registration.payload';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage{

  constructor(
    private readonly helper: HelperService,
  ) { }

  public regsPayload: RegistrationPayload ={ 
    name: '',
    email: '',
    confemail: '',
    password: '',
    confpassword: '',
  }

  public isLoading: boolean = false;

  public async newUser(): Promise<void>{
    if(!this.canCreate())
    return;

    this.isLoading = true;

    await this.helper.showToast('Gerando conta...');

    await this.helper.showAlert('Pergunta', [
      {
        text: 'Confirmar',
        handler: () => console.log('Confirmar'),
      },
      {
        text: 'Cancelar',
        handler: () => console.log('Cancelar')
      }
    ])

    console.log(this.regsPayload);
  }

  public canCreate(): boolean{
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.regsPayload.email);

    if(emailIsValid && this.regsPayload.password.length >= 6){
      if(this.regsPayload.email === this.regsPayload.confemail && this.regsPayload.password === this.regsPayload.confpassword)return true;
    }

    return false
  }

  public logoClick($event: boolean): void {
    console.log($event);
  }

}
