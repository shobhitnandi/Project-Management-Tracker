import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  appname = 'customers';
  apiUrl: any;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.apiUrl = sharedService.apiURL + this.appname;
  }

  getCustomer(id: number): Observable<object> {
    return this.http.get(`${this.apiUrl}/${id}`);
  }

  createCustomer(customer: Object): Observable<object> {
    return this.http.post(`${this.apiUrl}/`, customer);
  }

  updateCustomer(id: number, value: any): Observable<object> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  getCustomersByAge(age: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/age/${age}/`);
  }

  deleteAll(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/`);
  }
}