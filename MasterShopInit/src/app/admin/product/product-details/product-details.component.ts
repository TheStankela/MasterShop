import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/admin/models/product';
import { ProductService } from 'src/app/admin/services/product.service';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { Observable } from 'rxjs';

@Component({
  selector: 'product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit, OnChanges {

  categories: Category[];
  @Input()
  tempProduct: Product = new Product(0, null, null);

  product: Product = new Product(0, null, null);

  @Output()
  toggleActive = new EventEmitter<boolean>();

  @Output()
  saveProduct = new EventEmitter<Product>();

  constructor(
    private categoryService: CategoryService,
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {

    let id = parseInt(this.route.snapshot.paramMap.get('id'));

    if (id > 0) {
      this.productService.getProduct(id).subscribe({
        next: p => this.product = p,
        error: err => {
          this._snackBar.open(err.error, 'x', {
            horizontalPosition: 'right',
            verticalPosition: 'top',
            duration: 2000
          });

          this.closeAddProduct();
        }
      });
    }
    this.categoryService.getCategories().subscribe({
      next: c => this.categories = c
    });


    //this.product = this.productService.getProduct(id) ?? new Product(0, null,null);
  }

  closeAddProduct() {
    this.router.navigate(['admin/products']);
  }

  submit() {
    this.productService.saveProduct(this.product).subscribe({
      next: p => this.closeAddProduct(),
      error: err => console.log(err)
    });
  }

  ngOnChanges() {
    this.product = { ...this.tempProduct };
  }
}
