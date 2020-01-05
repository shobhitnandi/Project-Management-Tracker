import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeDetailService {
  appname = 'employee';
  apiUrl: any;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.apiUrl = sharedService.apiURL + this.appname;
  }

  /**
   * This function is responsible to create employee in the database.
   */
  createEmployee(projects: Object): Observable<object> {
    return this.http.post(`${this.apiUrl}/`, projects);
  }

  /**
   * This function is responsible to fetch all the employees from the database.
   */
  getEmployeeList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  /**
   * This function is responsible to update the employee details based upon the id parameter.
   */
  updateEmployee(id: number, value: any): Observable<object> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  /**
   * This function is responsible to delete a particular employee based upon the id parameter.
   */
  deleteEmployee(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  /**
   * This function is responsible to delete all employees from the database.
   */
  deleteAllEmployee(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/`);
  }

}
