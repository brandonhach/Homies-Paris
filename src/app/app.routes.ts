import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ConnoisseurComponent } from './pages/connoisseur/connoisseur.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'connoisseur', component: ConnoisseurComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
