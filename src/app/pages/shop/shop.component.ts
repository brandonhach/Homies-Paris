import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../types';
import { CartService } from '../../services/cart.service';
import { ProductsService } from '../../services/products.service';

@Component({
  selector: 'app-shop',
  imports: [ProductComponent, CommonModule],
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  products: Product[] = [];

  constructor(
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

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
