import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Cart, CartItem } from '../../../../types';

@Component({
  selector: 'app-cart-table',
  imports: [CommonModule],
  templateUrl: './cart-table.component.html',
  standalone: true,
})
export class CartTableComponent {
  @Input() cart!: Cart;
  @Output() cancelCartItemEvent = new EventEmitter<CartItem>();

  onCancelCartItem(item: CartItem) {
    this.cancelCartItemEvent.emit(item);
  }

  constructor() {}
}
