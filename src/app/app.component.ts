import { Component, OnDestroy } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnDestroy{
  constructor(
    private readonly router: Router,
  ) {
    router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe((route: NavigationEnd) => {

        if(!this.routesWithoutNavbar.includes(route.url)){
          this.canShowNavbar = true;
        }else{
          this.canShowNavbar = false;
        }
          
      })
  }

  public canShowNavbar: boolean = false;

  // Lista de páginas em que deve (ou não) acontecer algo
  public routesWithoutNavbar: string[] = ['/login'];

  public routeSubscription: Subscription;

  public ngOnDestroy(): void {
    this.routeSubscription.unsubscribe();
  }
}
