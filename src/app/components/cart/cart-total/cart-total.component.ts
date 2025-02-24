import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CartService } from '../../../services/cart.service';

@Component({
  selector: 'app-cart-total',
  imports: [CommonModule],
  templateUrl: './cart-total.component.html',
  styleUrl: './cart-total.component.scss',
  standalone: true,
})
export class CartTotalComponent {
  total: number = 0;
  @Output() checkoutEvent = new EventEmitter<void>();
  @Output() clearCartEvent = new EventEmitter<void>();

  constructor(cartService: CartService) {
    this.total = cartService.getTotal();
  }

  onCheckout(): void {
    this.checkoutEvent.emit();
  }

  onClearCart(): void {
    this.clearCartEvent.emit();
  }
}
