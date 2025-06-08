// cart.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Product } from './product.service';

@Injectable({ providedIn: 'root' })
export class CartService {
  private cartItems = new Map<number, { product: Product; quantity: number }>();
  private cartCount = new BehaviorSubject<number>(0);
  cartCount$ = this.cartCount.asObservable();

  updateCartCount(): void {
    const totalItems = Array.from(this.cartItems.values()).reduce((sum, item) => sum + item.quantity, 0);
    this.cartCount.next(totalItems);
  }

  increaseQuantity(product: Product): string | null {
    const item = this.cartItems.get(product.id);
    if (item) {
      if (item.quantity >= 5) return 'Out of Stock';
      item.quantity++;
    } else {
      this.cartItems.set(product.id, { product, quantity: 1 });
    }
    this.updateCartCount();
    return null;
  }

  decreaseQuantity(product: Product): void {
    const item = this.cartItems.get(product.id);
    if (item) {
      item.quantity--;
      if (item.quantity <= 0) {
        this.cartItems.delete(product.id);
      }
      this.updateCartCount();
    }
  }

  getQuantity(productId: number): number {
    return this.cartItems.get(productId)?.quantity || 0;
  }

  getCartItems(): { product: Product; quantity: number }[] {
    return Array.from(this.cartItems.values());
  }
}
