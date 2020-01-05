import { Component, OnInit } from '@angular/core';
import { Customer } from './customer';
import { CustomerService } from 'src/app/service/customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customer: Customer = new Customer();
  submitted = false;

  constructor(private customerService: CustomerService) { }

  ngOnInit() {
  }

  newCustomer(): void {
    this.submitted = false;
    this.customer = new Customer();
  }

  save() {
    this.customerService.createCustomer(this.customer)
      .subscribe(
        data => {
          this.submitted = true;
        },
        error => console.log(error));
    this.customer = new Customer();
  }

  onSubmit() {
    this.save();
  }

}
