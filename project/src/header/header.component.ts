import { Component, Input, Output, EventEmitter } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatBadgeModule } from '@angular/material/badge';
import { CartService } from '../cart.service';
import { AsyncPipe } from '@angular/common';
import {
  trigger, transition, style, animate, query, stagger
} from '@angular/animations';

@Component({
  selector: 'app-header',
  standalone: true,
  animations: [
  trigger('fadeIn', [
    transition(':enter', [
      style({ opacity: 0 }),
      animate('400ms ease-in', style({ opacity: 1 }))
    ])
  ])
],
  imports: [MatToolbarModule, MatIconModule, MatButtonModule, MatBadgeModule, AsyncPipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  @Input() isSidenavOpened = true;
  @Input() cartCount: number = 0;
  @Output() toggleSidenav = new EventEmitter<void>();

constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.cartService.cartCount$.subscribe(count => {
      this.cartCount = count;
    });
  }
}
