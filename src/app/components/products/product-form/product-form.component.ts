// components/products/product-form/product-form.component.ts
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ProductService } from '../../../services/product.service';
import { Product } from '../../../model/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ReactiveFormComponent } from '../../reactive-form/reactive-form.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-form',
  imports:[NgIf,ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {
  productForm: FormGroup;
  isEditMode = false;
  productId?: number;
  isLoading = false;
  errorMessage = '';

  constructor(
    private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.productForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      description: ['', Validators.required],
      price: ['', [Validators.required, Validators.min(0)]],
      category: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.productId = this.route.snapshot.params['id'];
    if (this.productId) {
      this.isEditMode = true;
      this.loadProduct(this.productId);
    }
  }

  loadProduct(id: number): void {
    this.isLoading = true;
    this.productService.getProduct(id).subscribe({
      next: (product) => {
        this.productForm.patchValue(product);
        this.isLoading = false;
      },
      error: (err) => {
        this.errorMessage = 'Failed to load product';
        this.isLoading = false;
      }
    });
  }

  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    this.isLoading = true;
    const productData = this.productForm.value;

    if (this.isEditMode && this.productId) {
      this.productService.updateProduct(this.productId, productData).subscribe({
        next: () => {
          this.router.navigate(['/products']);
        },
        error: (err) => {
          this.errorMessage = 'Failed to update product';
          this.isLoading = false;
        }
      });
    } else {
      this.productService.createProduct(productData).subscribe({
        next: () => {
          this.router.navigate(['/products']);
        },
        error: (err) => {
          this.errorMessage = 'Failed to create product';
          this.isLoading = false;
        }
      });
    }
  }

  onCancel(): void {
    this.router.navigate(['/products']);
  }
}