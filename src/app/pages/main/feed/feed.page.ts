import { Component, OnInit } from '@angular/core';
import { PostItColorEnum } from 'src/app/models/enums/postit-color.enum';
import { PostItProxy } from 'src/app/models/proxies/postit.proxy';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {

  constructor() { }

  public postItArray: PostItProxy[] = [
    {
      id: 0,
      title: 'Título do Post0',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.RED
    },
    {
      id: 1,
      title: 'Título do Post1',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.PINK
    },
    {
      id: 2,
      title: 'Título do Post2',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.GREEN
    },
    {
      id: 3,
      title: 'Título do Post3',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.YELLOW
    },
    {
      id: 4,
      title: 'Título do Post4',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.BLUE
    },
    {
      id: 5,
      title: 'Título do Post5',
      annotation: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse quis imperdiet sem. Suspendisse potenti. Curabitur eget nibh sed arcu cursus venenatis.',
      color: PostItColorEnum.PURPLE
    }
  ];

  ngOnInit() {
  }

}
