import { Component } from '@angular/core';
import { Cart, CartItem } from '../../../types';
import { MatCardModule } from '@angular/material/card';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-cart',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatTableModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './cart.component.html',
})
export class CartComponent {
  cart: Cart = {
    items: [
      {
        id: 1,
        product: {
          id: 1,
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          category: "men's clothing",
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        quantity: 2,
      },
      {
        id: 2,
        product: {
          id: 1,
          title: 'Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops',
          price: 109.95,
          description:
            'Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday',
          category: "men's clothing",
          image: 'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg',
          rating: {
            rate: 3.9,
            count: 120,
          },
        },
        quantity: 2,
      },
    ],
  };

  getTotal(item: CartItem[]): number {
    return item
      .map((item) => item.product.price * item.quantity)
      .reduce((prev, current) => prev + current, 0);
  }

  ngOnInit(): void {}
}
