import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NgFor } from '@angular/common';
import {
  trigger,transition,style,animate,state} from '@angular/animations';
import { HeaderComponent } from '../header/header.component';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { CardsComponent } from '../cards/cards.component';
import { TableComponent } from '../table/table.component';
import { ChartsComponent } from '../charts/charts.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenav, MatSidenavContainer, MatSidenavContent } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  standalone: true,
  animations: [
    trigger('slideFade', [
      state('void', style({ transform: 'translateX(-100%)', opacity: 0 })),
      state('*', style({ transform: 'translateX(0)', opacity: 1 })),
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate('300ms ease-out')
      ]),
      transition(':leave', [
        animate('300ms ease-in', style({ transform: 'translateX(-100%)', opacity: 0 }))
      ])
    ])
  ],
  imports: [RouterOutlet, HeaderComponent, SidebarComponent, NgFor, CardsComponent, TableComponent, ChartsComponent, MatCardModule, MatSidenavContainer, MatSidenav, MatSidenavContent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'project';

    isSmallScreen = false;

    cartCount = 0;

    cards = [
    { title: 'Users', count: 120 },
    { title: 'Orders', count: 53 },
    { title: 'Revenue', count: '$12,400' },
    { title: 'Errors', count: 3 }
  ];

    constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isSmallScreen = result.matches;
    });
  }


ngOnInit() {
  this.isSmallScreen = window.innerWidth < 768;
  window.addEventListener('resize', () => {
    this.isSmallScreen = window.innerWidth < 768;
  });
}

}

// dashboard with left menu and top menu
// four cards with count 
// two charts to be implemented 
// one table 
//all using angular material