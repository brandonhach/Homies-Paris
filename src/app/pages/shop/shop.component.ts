import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../types';
import { CartService } from '../../services/cart.service';
import { StoreService } from '../../services/store.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shop',
  imports: [ProductComponent, CommonModule],
  templateUrl: './shop.component.html',
})
export class ShopComponent {
  products: Product[] = [];
  sort = 'desc';
  count = '12';
  category: string | undefined;
  productsSubscription: Subscription | undefined;

  constructor(
    private cartService: CartService,
    private storeService: StoreService
  ) {}

  ngOnInit(): void {
    this.getProducts();
  }

  private getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
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

  onSetCategory(category: string): void {
    this.category = category;
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }
}
