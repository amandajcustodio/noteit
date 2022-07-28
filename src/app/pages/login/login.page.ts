import { Component} from '@angular/core';
import { LoginPayload } from 'src/app/models/payloads/login.payload';
import { RegistrationPayload } from 'src/app/models/payloads/registration.payload';
import { HelperService } from 'src/app/services/helper.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{

  constructor(
    private readonly helper: HelperService,
    private readonly router: Router,
  ) { }

  public loginPayload: LoginPayload = {
    email: '',
    password: '',
  }

  public regsPayload: RegistrationPayload ={ 
    name: '',
    email: '',
    confemail: '',
    password: '',
    confpassword: '',
  } 

  public isLoading: boolean = false;

  public isSigning: boolean = false;

  public async login(): Promise<void>{
    if(!this.canLogin())
    return;

    this.isLoading = true;

    // toast (mensagem)
    await this.helper.showToast('Carregando...');

    // alert
    await this.helper.showAlert('Hello', [
      {
        text: 'Ok',
        handler: () => console.log('Ok!'),
      },
      {
        text: 'Outro',
        handler: () => console.log('Outro!'),
      }
    ]);

    console.log(this.loginPayload);
    await this.router.navigate(['/home']);
  }

  public canLogin(): boolean{
    const regex = new RegExp('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$');

    const emailIsValid = regex.test(this.loginPayload.email);

    if(emailIsValid && this.loginPayload.password.length >= 6)return true

    return false
  }

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