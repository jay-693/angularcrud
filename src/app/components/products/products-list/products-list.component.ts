// components/products/product-list/product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product.model';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { FormsModule, NgControl } from '@angular/forms';
import { NgFor, NgIf } from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports:[FormsModule,NgIf,NgFor,RouterLink],
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  isLoading = true;
  errorMessage = '';

  constructor(
    private productService: ProductService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.isLoading = true;
    this.productService.getProducts().subscribe({
      next: (products) => {
        this.products = products;
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load products';
        this.isLoading = false;
      }
    });
  }

  editProduct(id: number): void {
    this.router.navigate(['/products/edit', id]);
  }

  deleteProduct(id: number): void {
    if (confirm('Are you sure you want to delete this product?')) {
      this.productService.deleteProduct(id).subscribe({
        next: () => {
          this.products = this.products.filter(p => p.id !== id);
        },
        error: (err) => {
          this.errorMessage = 'Failed to delete product';
        }
      });
    }
  }
}