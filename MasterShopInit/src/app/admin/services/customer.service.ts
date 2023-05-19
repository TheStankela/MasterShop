import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Customer } from '../models/customer';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  baseUrl = environment.apiUrl;
  constructor(private httpClient: HttpClient) {

   }

   getCustomers() : Observable<Customer[]>{
    return this.httpClient.get<Customer[]>(this.baseUrl + '/customers')
   }
   getCustomer(id: number): Observable<Customer>{
    return this.httpClient.get<Customer>(this.baseUrl + '/customers/' + id);
   }
   saveCustomer(customer: Customer) : Observable<Customer>{
    return this.httpClient.post<Customer>(this.baseUrl + '/customers', customer);
   }

}
