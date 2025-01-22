import { Component } from '@angular/core';
import { ProductsService } from '../../services/products.service';
import { Product } from '../../../types';

@Component({
  selector: 'app-home',
  imports: [],
  template: ` <p>home works!</p> `,
  styleUrl: './home.component.scss',
})
export class HomeComponent {
  constructor(private productsService: ProductsService) {}

  /**
   * Initialized when component is called
   */
  ngOnInit() {
    this.productsService
      .getProducts('https://fakestoreapi.com/products', { limit: 5 })
      .subscribe((products: Product[]) => {
        console.log(products);
      });
  }
}
