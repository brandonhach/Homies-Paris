import { Component } from '@angular/core';
import { Cart, CartItem } from '../../../types';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { HttpClient } from '@angular/common/http';
import { loadStripe } from '@stripe/stripe-js';
import { StripeService } from '../../services/stripe.service';

@Component({
  selector: 'app-cart',
  imports: [CommonModule],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: Cart = { items: [] };

  constructor(
    private cartService: CartService,
    private stripeService: StripeService,
    private http: HttpClient
  ) {}

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

  onCheckout(): void {
    this.http
      .post('http://localhost:4242/checkout', {
        items: this.cart.items,
      })
      .subscribe(async (res: any) => {
        this.stripeService.getSecret().subscribe(async (secret: string) => {
          let stripe = await loadStripe(secret);
          stripe?.redirectToCheckout({
            sessionId: res.id,
          });
        });
      });
  }
}
