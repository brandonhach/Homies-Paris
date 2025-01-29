import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { lucideInstagram } from '@ng-icons/lucide';
@Component({
  selector: 'app-connoisseur',
  imports: [NgIcon],
  viewProviders: [provideIcons({ lucideInstagram })],
  templateUrl: './connoisseur.component.html',
})
export class ConnoisseurComponent {}
