import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../types';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';
import { ProductComponent } from '../../components/product/product.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-home',
  imports: [
    MatButtonModule,
    MatMenuModule,
    ProductComponent,
    MatGridListModule,
    CommonModule,
    MatIconModule,
  ],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  products: Product[] = [];
  constructor(private productsService: ProductsService) {}

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
}
