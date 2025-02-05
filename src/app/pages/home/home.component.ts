import { Component } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';

@Component({
  selector: 'app-home',
  imports: [ShopComponent],
  templateUrl: './home.component.html',
})
export class HomeComponent {}
