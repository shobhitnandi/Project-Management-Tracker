import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
/**
 * This service is used to handle all the CRUD operation related to projects.
 */
export class ProjectDetailsService {

  appname = 'projects';
  apiUrl: any;

  constructor(private http: HttpClient, private sharedService: SharedService) {
    this.apiUrl = sharedService.apiURL + this.appname;
  }

  /**
   * This function is responsible to create project in the database.
   */
  createProject(projects: Object): Observable<object> {
    return this.http.post(`${this.apiUrl}/`, projects);
  }

  /**
   * This function is responsible to fetch all the projects from the database.
   */
  getProjectsList(): Observable<any> {
    return this.http.get(`${this.apiUrl}/`);
  }

  /**
   * This function is responsible to update the project details based upon the id parameter.
   */
  updateProject(id: number, value: any): Observable<object> {
    return this.http.put(`${this.apiUrl}/${id}`, value);
  }

  /**
   * This function is responsible to delete a particular project based upon the id parameter.
   */
  deleteProject(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }

  /**
   * This function is responsible to delete all projects from the database.
   */
  deleteAllProject(): Observable<any> {
    return this.http.delete(`${this.apiUrl}/`);
  }

}
