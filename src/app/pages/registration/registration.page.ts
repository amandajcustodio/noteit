import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage{

  constructor() { }

  public logoClick($event: boolean): void {
    console.log($event);
  }

}
