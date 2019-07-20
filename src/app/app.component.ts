import { Component, OnInit, ViewChild } from '@angular/core';
import { MdcDrawer, MdcTopAppBar } from '@angular-mdc/web';
import { Router } from '@angular/router';

const SMALL_WIDTH_BREAKPOINT = 1240;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
  matcher: MediaQueryList;
  title = 'Engenho Novo MDC';

  constructor(private _router: Router) {
  }

  @ViewChild('topAppBar') topAppBar: MdcTopAppBar;
  @ViewChild('appDrawer') appDrawer: MdcDrawer;

  navigationLinks = [
    {name: 'In Media Res', route: 'home', icon: '../assets/Icon%20-%2032x24%20-%20Home.svg'},
    {name: 'In Principio', route: 'general-settings', icon: '../assets/Icon%20-%2032x24%20-%20General%20Settings.svg'},
    {name: 'Satisfaction', route: 'roles', icon: '../assets/Icon%20-%2032x24%20-%20Roles.svg'},
    {name: 'Brown Sugar', route: 'users', icon: '../assets/Icon%20-%2032x24%20-%20Users.svg'},
    {name: 'Jumping Jack Flash', route: 'forms', icon: '../assets/Icon%20-%2032x24%20-%20Forms.svg'},
    {name: 'Sympathy for the Devil', route: 'episodes', icon: '../assets/Icon%20-%2032x24%20-%20Episodes.svg'}
  ];

  isScreenSmall(): boolean {
    return this.matcher.matches;
  }

  ngOnInit(): void {
    this.matcher = matchMedia(`(max-width: ${SMALL_WIDTH_BREAKPOINT}px)`);
  }

  onDrawerSelect(route: string, param) {
    this._router.navigate([route]);

    this.appDrawer.open = false;
    console.log(this.appDrawer);
    console.log(param);
  }
}
