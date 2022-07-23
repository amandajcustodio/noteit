import { Component, Input, Output, EventEmitter } from '@angular/core';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-postit',
  templateUrl: './postit.component.html',
  styleUrls: ['./postit.component.scss'],
})
export class PostitComponent{

  constructor() { }

  @Input()
  public postit: PostitProxy;

  @Output()
  public postitSelected: EventEmitter<PostitProxy> = new EventEmitter<PostitProxy>();

  public emitPost(): void{
    this.postitSelected.emit(this.postit)
  }

}
