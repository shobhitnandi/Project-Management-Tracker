import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/service/customer.service';
import { Customer } from '../customers/customer';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list-of-customer',
  templateUrl: './list-of-customer.component.html',
  styleUrls: ['./list-of-customer.component.css']
})
export class ListOfCustomerComponent implements OnInit {

  customers: Observable<Customer[]>;
  constructor(private customerService: CustomerService) { }

  ngOnInit() {
    this.reloadData();
  }

  deleteCustomers() {
    this.customerService.deleteAll()
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log('ERROR: ' + error));
  }

  reloadData() {
    this.customers = this.customerService.getCustomersList();
  }

  updateActive(customer: Customer, isActive: boolean) {
    this.customerService.updateCustomer(customer.id,
      { name: customer.name, age: customer.age, active: isActive })
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }

  deleteCustomer(customer: Customer) {
    this.customerService.deleteCustomer(customer.id)
      .subscribe(
        data => {
          this.reloadData();
        },
        error => console.log(error));
  }

}

