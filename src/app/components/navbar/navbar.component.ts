import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { NavbarEnum } from 'src/app/models/enums/navbar.enums';
import { filter } from 'rxjs/operators';
import { NavbarItemInterface } from 'src/app/models/interfaces/navbar-item.interface';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {

  constructor(
    private readonly router: Router,
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {
        if (route.url.includes('/feed'))
          this.currentNavbar = NavbarEnum.FEED;
        if (route.url.includes('/home'))
          this.currentNavbar = NavbarEnum.HOME;
        if (route.url.includes('/profile'))
          this.currentNavbar = NavbarEnum.PROFILE;
      });
  }

  public currentNavbar: NavbarEnum = NavbarEnum.HOME;

  public navbarList: NavbarItemInterface[]=[
    {
      type: NavbarEnum.FEED,
      link: '/feed',
      icon: 'assets/img/icon-calendar.svg',
      iconActivated: 'assets/img/icon-calendar-selected.svg',
    },
    {
      type: NavbarEnum.HOME,
      link: '/home',
      icon: 'assets/img/icon-home.svg',
      iconActivated: 'assets/img/icon-home-selected.svg',
    },
    {
      type: NavbarEnum.PROFILE,
      link: '/profile',
      icon: 'assets/img/icon-user.svg',
      iconActivated: 'assets/img/icon-user-selected.svg',
    },
  ]
}
