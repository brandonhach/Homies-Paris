import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../types';
import { CartService } from '../../services/cart.service';
import { StoreService } from '../../services/store.service';

@Component({
  selector: 'app-shop',
  imports: [ProductComponent, CommonModule],
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  products: Product[] = [];
  sort = 'desc';
  count = '12';

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit() {
    this.getProducts();
  }

  private getProducts(): void {
    this.storeService
      .getAllProducts(this.count, this.sort)
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  public onAddToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      product: product,
      quantity: 1,
    });
  }
}
