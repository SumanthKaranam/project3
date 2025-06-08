import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Category {
  id: number;
  name: string;
  image: string;
}

export interface Product {
  id: number;
  title: string;
  price: number;
  category: Category;
  images: string[];
    quantity?: number; // Add this line
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private productApi = 'https://api.escuelajs.co/api/v1/products';
  private categoryApi = 'https://api.escuelajs.co/api/v1/categories';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.productApi);
  }

  getCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(this.categoryApi);
  }
}
