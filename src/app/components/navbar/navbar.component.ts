import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideShoppingCart, lucideUser, lucideGithub } from '@ng-icons/lucide';
import { CartService } from '../../services/cart.service';
import { CommonModule } from '@angular/common';
import { Cart } from '../../../types';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon, CommonModule],
  templateUrl: './navbar.component.html',
  viewProviders: [
    provideIcons({ lucideShoppingCart, lucideUser, lucideGithub }),
  ],
})
export class NavbarComponent {}
