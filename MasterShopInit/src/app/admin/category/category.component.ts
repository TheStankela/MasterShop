import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Category } from 'src/app/admin/models/category';
import { CategoryService } from 'src/app/admin/services/category.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category: Category = new Category(0, null, null);
  
  categories: Category[];
  categoriesObservable: Observable<Category[]>;

  displayedColumns = ['id', 'name', 'icon', 'action'];

  constructor(private categoryService: CategoryService, private router: Router) { }
  
  ngOnInit(): void {
    this.getCategories();
  }
  getCategories() {
    this.categoryService.getCategories().subscribe({
      next: c => this.categories = c,
      error: err => console.log(err)
    });
    this.categoriesObservable = this.categoryService.getCategories();
  }
  edit(categoryId: number){
    this.router.navigate(['admin/categories/edit/' + categoryId]);
  }
  addCategory(){
    this.router.navigate(['admin/categories/add']);
  }
  delete(categoryId: number){
    this.categoryService.deleteCategory(categoryId).subscribe();
    this.getCategories();
  }
}
