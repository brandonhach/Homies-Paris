import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CartComponent } from './pages/cart/cart.component';
import { ConnoisseurComponent } from './pages/connoisseur/connoisseur.component';
import { ProductComponent } from './pages/product/product.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'cart', component: CartComponent },
  { path: 'connoisseur', component: ConnoisseurComponent },
  { path: 'product/:productId', component: ProductComponent },
  { path: '', redirectTo: '', pathMatch: 'full' },
];
