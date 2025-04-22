// services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../model/product.model';
import { Observable, of, throwError } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private products: Product[] = [
  //   { id: 1, name: 'Laptop', description: 'High performance laptop', price: 999.99, category: 'Electronics', createdAt: new Date() },
  //   { id: 2, name: 'Smartphone', description: 'Latest smartphone', price: 699.99, category: 'Electronics', createdAt: new Date() }
  ];

  // CREATE
  createProduct(product: Omit<Product, 'id' | 'createdAt'>): Observable<Product> {
    const newProduct: Product = {
      ...product,
      id: this.generateId(),
      createdAt: new Date()
    };
    this.products.push(newProduct);
    return of(newProduct).pipe(delay(500)); // Simulate API delay
  }

  // READ (all)
  getProducts(): Observable<Product[]> {
    return of(this.products).pipe(delay(500));
  }

  // READ (single)
  getProduct(id: number): Observable<Product> {
    const product = this.products.find(p => p.id === id);
    return product 
      ? of(product).pipe(delay(500)) 
      : throwError(() => new Error('Product not found'));
  }

  // UPDATE
  updateProduct(id: number, product: Partial<Product>): Observable<Product> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      return throwError(() => new Error('Product not found'));
    }
    this.products[index] = { ...this.products[index], ...product };
    return of(this.products[index]).pipe(delay(500));
  }

  // DELETE
  deleteProduct(id: number): Observable<boolean> {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) {
      return throwError(() => new Error('Product not found'));
    }
    this.products.splice(index, 1);
    return of(true).pipe(delay(500));
  }

  private generateId(): number {
    return Math.max(...this.products.map(p => p.id), 0) + 1;
  }
}