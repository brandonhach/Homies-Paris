import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from '../../components/product/product.component';
import { Product } from '../../../types';
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
  count = '30';
  category: string | undefined = 'jewelery';
  productsSubscription: Subscription | undefined;
  view = 3;

  constructor(private storeService: StoreService) {}

  ngOnInit(): void {
    this.getProducts();
  }

  ngOnDestroy(): void {
    if (this.productsSubscription) {
      this.productsSubscription.unsubscribe();
    }
  }

  private getProducts(): void {
    this.productsSubscription = this.storeService
      .getAllProducts(this.count, this.sort, this.category)
      .subscribe((products: Product[]) => {
        this.products = products;
      });
  }

  onSetCategory(category: string): void {
    this.category = category;
    this.getProducts();
  }

  onSetSort(sort: string): void {
    this.sort = sort;
    this.getProducts();
  }

  onSetView(view: number): void {
    this.view = view;
    this.getProducts();
  }
}
