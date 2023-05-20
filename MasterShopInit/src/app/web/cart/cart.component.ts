import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/cart';
import { Product } from 'src/app/admin/models/product';
import { CartItem } from '../models/cartItem';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cart: Cart = { items: [{
    id: 1,
    price: 10,
    title: 'test',
    quantity: 3
  },{
    id: 1,
    price: 10,
    title: 'test',
    quantity: 3
  }]};

  dataSource: Array<CartItem> = [];
  displayedColumns: Array<String> = ['title', 'quantity', 'price', 'totalPrice', 'action'];


  constructor() { }

  ngOnInit(): void {
    this.dataSource = this.cart.items;
  }
  getTotal(items: Array<CartItem>): number{
    return items.
    map((item) => item.price * item.quantity)
    .reduce((prev, current) => prev + current, 0)
  }

}
