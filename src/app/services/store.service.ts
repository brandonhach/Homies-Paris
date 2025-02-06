import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../types';

const STORE_BASE_URL = 'https://fakestoreapi.com';

@Injectable({
  providedIn: 'root',
})
export class StoreService {
  constructor(private httpClient: HttpClient) {}

  getAllProducts(
    limit = '12',
    sort = 'desc',
    category = ''
  ): Observable<Array<Product>> {
    return this.httpClient.get<Array<Product>>(
      `${STORE_BASE_URL}/products${
        category ? `/category/${category}` : ''
      }?limit=${limit}&sort=${sort}`
    );
  }
}
