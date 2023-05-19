import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { Customer } from '../../models/customer';
import { CustomerService } from '../../services/customer.service';

@Component({
  selector: 'app-customer-details',
  templateUrl: './customer-details.component.html',
  styleUrls: ['./customer-details.component.css']
})
export class CustomerDetailsComponent implements OnInit {

  @Input()
  customer = new Customer(0, null, null);
  tempCustomer = new Customer(0, null, null);

  @Output()
  toggleActive = new EventEmitter<boolean>();

  @Output()
  saveCustomer = new EventEmitter<Customer>();
  
  constructor(private router: Router, private customerService: CustomerService) { }

  ngOnInit(): void {

  }
  closeAddCustomer(){
    return this.router.navigate(['admin/customers']);
  }
  submit(){
    return this.customerService.saveCustomer(this.customer).subscribe({
      next: c => this.closeAddCustomer(),
      error: err => {
        console.log(err);
      }
    })
  }

  ngOnChanges(){
    this.customer = {...this.tempCustomer};
  }
}
