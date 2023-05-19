import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './admin/home/home.component';
import { AdminLayoutComponent } from './admin/layout/admin-layout.component';
import { ProductDetailsComponent } from './admin/product/product-details/product-details.component';
import { ProductComponent } from './admin/product/product.component';
import { IndexComponent } from './web/index/index.component';
import { WebLayoutComponent } from './web/layout/web-layout.component';
import { CategoryComponent } from './admin/category/category.component';
import { CategoryDetailsComponent } from './admin/category/category-details/category-details.component';

const routes = [
  {
    path: '',
    component: WebLayoutComponent,
    children: [
      { path: '', component: IndexComponent },
    ]
  },
  {
    path: 'admin',
    component: AdminLayoutComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'products', component: ProductComponent },
      { path: 'products/add', component: ProductDetailsComponent },
      { path: 'products/edit/:id', component: ProductDetailsComponent },
      { path: 'categories', component: CategoryComponent},
      { path: 'categories/add', component: CategoryDetailsComponent},
      { path: 'categories/edit/:id', component: CategoryDetailsComponent}
    ]
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
