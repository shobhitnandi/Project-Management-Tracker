import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ManagerDetailService {
  appname = 'manager';
  apiUrl: any;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.apiUrl = sharedService.apiURL + this.appname;
  }

  /**
   * This function is responsible to create manager in the database.
   */
  createManager(projects: Object): Observable<object> {
    return this.http.post(`${this.apiUrl}/`, projects);
  }

  /**
   * This function is responsible to fetch all the managers from the database.
   */
  getManagersList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  /**
   * This function is responsible to update the manager details based upon the id parameter.
   */
  updateManager(id: number, value: any): Observable<object> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  /**
   * This function is responsible to delete a particular manager based upon the id parameter.
   */
  deleteManager(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  /**
   * This function is responsible to delete all managers from the database.
   */
  deleteAllManager(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/`);
  }

}
