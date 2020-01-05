import { Component, OnInit } from '@angular/core';
import { Customer } from '../customers/customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-search-customer',
  templateUrl: './search-customer.component.html',
  styleUrls: ['./search-customer.component.css']
})
export class SearchCustomerComponent implements OnInit {

  age: number;
  customerData: Customer[];

  constructor(private dataService: CustomerService) { }

  ngOnInit() {
    this.age = 0;
  }

  private searchCustomers() {
    debugger;
    this.customerData = [];
    this.dataService.getCustomersByAge(this.age)
      .subscribe(customers => {
        this.customerData = customers;
      });
  }

  onSubmit() {
    this.searchCustomers();
  }

}