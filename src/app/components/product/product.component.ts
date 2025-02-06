import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../../../types';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  @Input() product!: Product;
  @Output() addToCart = new EventEmitter();

  onAddToCart(): void {
    this.addToCart.emit(this.product);
  }
}
