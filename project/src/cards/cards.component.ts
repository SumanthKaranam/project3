import { Component } from '@angular/core';
import { ProductService, Product } from '../product.service';
import { CartService } from '../cart.service';
import { MatIconModule } from '@angular/material/icon';
import {  MatCardModule } from '@angular/material/card';
import { NgFor, NgIf } from '@angular/common';
import {
  trigger, transition, style, animate, query, stagger
} from '@angular/animations';

@Component({
  selector: 'app-cards',
  standalone: true,
  animations: [
    trigger('cardAnimation', [
      transition(':enter', [
        query('mat-card', [
          style({ opacity: 0, transform: 'scale(0.9)' }),
          stagger(100, [
            animate('300ms ease-out', style({ opacity: 1, transform: 'scale(1)' }))
          ])
        ])
      ])
    ])
  ],
  imports: [MatIconModule, MatCardModule, NgIf, NgFor],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  products: Product[] = [];
  messages: { [key: number]: string } = {};

  constructor(private productService: ProductService, private cartService: CartService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe((data) => {
      this.products = data 
    });
  }

  addToCart(product: Product) {
    this.cartService.increaseQuantity(product);
  }

  increase(product: Product) {
    const msg = this.cartService.increaseQuantity(product);
    this.messages[product.id] = msg ?? '';
  }

  decrease(product: Product) {
    this.cartService.decreaseQuantity(product);
    this.messages[product.id] = '';
  }

  getQuantity(product: Product): number {
    return this.cartService.getQuantity(product.id);
  }
}
