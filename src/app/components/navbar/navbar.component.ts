import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideShoppingCart, lucideUser, lucideGithub } from '@ng-icons/lucide';

@Component({
  selector: 'app-navbar',
  imports: [NgIcon],
  templateUrl: './navbar.component.html',
  viewProviders: [
    provideIcons({ lucideShoppingCart, lucideUser, lucideGithub }),
  ],
})
export class NavbarComponent {}
