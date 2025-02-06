import { Component, EventEmitter, Output } from '@angular/core';
import { Product } from '../../../types';
import { StoreService } from '../../services/store.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
})
export class ProductComponent {
  product!: Product;
  @Output() addToCart = new EventEmitter();

  constructor(
    private route: ActivatedRoute,
    private storeService: StoreService,
    private router: Router,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const productId = params.get('productId');
      if (productId) {
        this.getProduct(productId);
      }
    });
  }

  onAddToCart(product: Product): void {
    this.cartService.addToCart({
      id: product.id,
      product: product,
      quantity: 1,
    });
  }

  private getProduct(id: string): void {
    this.storeService.getSingleProduct(id).subscribe((product: Product) => {
      this.product = product;
      if (product == null) {
        this.router.navigate(['/']);
      }
    });
  }
}
