import { Component, OnInit } from '@angular/core';
import { PostitColorEnum } from 'src/app/models/enums/postit-color';
import { PostitProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  constructor() { }

  public postitArray: PostitProxy[] = [
    {
      id: 1,
      title: "Título do Post1",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: PostitColorEnum.RED,
    },
    {
      id: 2,
      title: "Título do Post2",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: PostitColorEnum.PINK,
    }, 
    {
      id: 3,
      title: "Título do Post3",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: PostitColorEnum.GREEN,
    }, 
    {
      id: 4,
      title: 'Título do Post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostitColorEnum.YELLOW,
    }, 
    {
      id: 5,
      title: "Título do Post5",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: PostitColorEnum.BLUE,
    },
    {
      id: 6,
      title: "Título do Post6",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: PostitColorEnum.PURPLE,
    },
  ]

  public postitColorEnum: typeof PostitColorEnum = PostitColorEnum;


  ngOnInit() {
    console.log('postitColorEnum', this.postitColorEnum);
  }

  public consoleColor(color: string): void{
    console.log("color", color)
  }

  public printPostit(event: PostitProxy): void {
    console.log('postit', event);
  }
}
