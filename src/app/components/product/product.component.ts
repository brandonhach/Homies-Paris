import { Component, Input } from '@angular/core';
import { Product } from '../../../types';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product!: Product;
  constructor(private cartService: CartService) {}

  onAddToCart(): void {
    this.cartService.addToCart({
      id: this.product.id,
      product: this.product,
      quantity: 1,
    });
  }
}
