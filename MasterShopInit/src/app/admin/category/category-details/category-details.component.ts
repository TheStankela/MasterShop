import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../../services/category.service';
import { Category } from '../../models/category';
import { error } from 'console';

@Component({
  selector: 'app-category-details',
  templateUrl: './category-details.component.html',
  styleUrls: ['./category-details.component.css']
})
export class CategoryDetailsComponent implements OnInit {
  @Input()
  category = new Category(0, null, null);
  tempCategory = new Category(0, null, null);

  @Output()
  toggleActive = new EventEmitter<boolean>();

  @Output()
  saveCategory = new EventEmitter<Category>();
  
  constructor(
    private activatedRoute: ActivatedRoute, 
    private categoryService: CategoryService,
    private router: Router) { }

  ngOnInit(): void {
    let id = parseInt(this.activatedRoute.snapshot.paramMap.get('id'));

    if(id > 0){
      this.categoryService.getCategory(id).subscribe({
        next: c => this.category = c,
        error: err => console.log(err)});
    }
      }

      closeAddCategory() {
        this.router.navigate(['admin/categories'])
      }

      submit(){
        this.categoryService.saveCategory(this.category).subscribe({
          next: p => this.closeAddCategory(),
          error: err => console.log(err)
        });
      }

      ngOnChanges() {
        this.category = { ...this.tempCategory };
      }
  }
