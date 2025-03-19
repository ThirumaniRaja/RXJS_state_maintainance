import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  products: Product[] = [
    { id: 1, name: 'Laptop', price: 800, image: 'assets/images/laptop.jpg', description: 'Powerful laptop' },
    { id: 2, name: 'Phone', price: 500, image: 'assets/images/phone.jpg', description: 'Smartphone' },
  ];

  getProducts(): Observable<Product[]> {
    return of(this.products); 
  }
}
