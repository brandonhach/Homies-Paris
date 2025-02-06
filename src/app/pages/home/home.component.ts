import { Component } from '@angular/core';
import { ShopComponent } from '../shop/shop.component';
import { CommonModule } from '@angular/common';
import { homeBannerItem } from '../../config/site-config';

@Component({
  selector: 'app-home',
  imports: [ShopComponent, CommonModule],
  templateUrl: './home.component.html',
})
export class HomeComponent {
  homeBannerItem = homeBannerItem;
}
