import { Component, OnInit } from '@angular/core';
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
      color: "blue",
    },
    {
      id: 2,
      title: "Título do Post2",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: "D7DF6B",
    }, 
    {
      id: 3,
      title: "Título do Post3",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: "#F77D60",
    }, 
    {
      id: 4,
      title: "Título do Post4",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: "#F77D60",
    }, 
    {
      id: 5,
      title: "Título do Post5",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: "#F77D60",
    },
    {
      id: 6,
      title: "Título do Post6",
      annotation: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam nulla cumque libero, atque saepe quas.",
      color: "#F77D60",
    },
  ]

  ngOnInit() {
  }

}
