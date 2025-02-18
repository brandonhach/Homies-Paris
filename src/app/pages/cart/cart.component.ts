import { Component } from '@angular/core';
import { Cart, CartItem } from '../../../types';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: Cart = { items: [] };

  constructor(private cartService: CartService) {}

  getTotal(item: CartItem[]): number {
    return item
      .map((item) => item.product.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  ngOnInit(): void {
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
    });
  }

  cancelCartItem(item: CartItem): void {
    this.cartService.cancelCartItem(item);
  }

  onClearCart(): void {
    this.cartService.clearCart();
  }
}
