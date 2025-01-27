import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../types';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-home',
  imports: [ProductComponent, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  /**
   * Initialized when component is called
   */
  ngOnInit() {
    this.productsService
      .getProducts('https://fakestoreapi.com/products', { limit: 30 })
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      product: product,
      quantity: 1,
    });
  }
}
