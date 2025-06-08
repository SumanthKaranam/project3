import { Component, ViewEncapsulation } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import {
  trigger, transition, style, animate, query, stagger
} from '@angular/animations';

@Component({
  selector: 'app-sidebar',
  standalone: true,
    encapsulation: ViewEncapsulation.None,
  animations: [
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 }))
    ])
  ])
],
  imports: [MatSidenavModule, MatListModule, MatIconModule, RouterModule],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {

}
