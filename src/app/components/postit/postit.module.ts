import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostitComponent } from './postit.component';
import { IonicModule } from '@ionic/angular';

@NgModule({
  declarations: [
    PostitComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ],
  exports: [
    PostitComponent
  ],
})
export class PostitModule { }
