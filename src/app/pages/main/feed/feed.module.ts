import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FeedPageRoutingModule } from './feed-routing.module';

import { FeedPage } from './feed.page';
import { FeedItemComponent } from 'src/app/components/feed-item/feed-item.component';
import { FeedItemModule } from 'src/app/components/feed-item/feed-item.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FeedPageRoutingModule,
    FeedItemModule
  ],
  declarations: [FeedPage]
})
export class FeedPageModule {}
