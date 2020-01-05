import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AssignProjectService {
  
  appname = 'assignproject';
  apiUrl: any;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.apiUrl = sharedService.apiURL + this.appname;
  }

  /**
   * This function is responsible to create assign project in the database.
   */
  createAssignProject(projects: Object): Observable<object> {
    return this.http.post(`${this.apiUrl}/`, projects);
  }

  /**
   * This function is responsible to fetch all the assign project from the database.
   */
  getAssignProjectList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  /**
   * This function is responsible to update the assign project details based upon the id parameter.
   */
  updateAssignProject(id: number, value: any): Observable<object> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  /**
   * This function is responsible to delete a particular assign project based upon the id parameter.
   */
  deleteAssignProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  /**
   * This function is responsible to delete all assign project from the database.
   */
  deleteAllAssignProject(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/`);
  }

}
