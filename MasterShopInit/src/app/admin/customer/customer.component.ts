import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customersObservable: Observable<Customer[]>;
  customer = new Customer(0, null, null);
  customers: Customer[];

  displayedColumns = ['id', 'firstName', 'lastName'];

  constructor(private customerService: CustomerService, private router: Router) { }

  ngOnInit(): void {
    this.getCustomers();
    this.customersObservable = this.customerService.getCustomers();
  }
  getCustomers(){
    this.customerService.getCustomers().subscribe({
      next: c => this.customers = c,
      error: err => {
        console.log(err);
      }
    });
  }
  addCustomer(){
    return this.router.navigate(['admin/customers/add']);
  }
}
