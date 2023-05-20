import { Component, OnInit } from '@angular/core';
import { Category } from 'src/app/admin/models/category';
import { BrowserModule } from '@angular/platform-browser'
import { CategoryService } from 'src/app/admin/services/category.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {
  categories: Category[] = [];
  constructor(private categoryService: CategoryService){}
  ngOnInit(): void {
    this.categoryService.getCategories().subscribe({next: c => this.categories = c});
  }


}
