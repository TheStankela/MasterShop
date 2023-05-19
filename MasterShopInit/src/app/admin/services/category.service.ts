import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition } from '@angular/material/snack-bar';
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  private baseUrl = environment.apiUrl;
  
  constructor(private _snackBar: MatSnackBar, private httpClient: HttpClient) {}
  horizontalPosition: MatSnackBarHorizontalPosition = 'right';
    verticalPosition: MatSnackBarVerticalPosition = 'top';

  getCategories(){
    return this.httpClient.get<Category[]>(this.baseUrl + '/categories');
  }
  getCategory(id:number){
    return this.httpClient.get<Category>(this.baseUrl + '/categories/' + id);
  }
  saveCategory(category: Category){
    return this.httpClient.post(this.baseUrl + '/categories', category);
  }
  editCategory(category: Category){
    return this.httpClient.put(this.baseUrl + '/categories/' + category.id, category);
  }
  deleteCategory(categoryId: number){
    return this.httpClient.delete(this.baseUrl + '/categories/' + categoryId);
  }
}
