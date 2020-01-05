import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SharedService } from './shared.service';
import { Observable } from 'rxjs';
import { CookieService } from 'ngx-cookie-service'

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  appname = 'api';
  apiUrl: any;

  constructor(private http: HttpClient, private sharedService: SharedService, private cookieService: CookieService) { 
    this.apiUrl = sharedService.apiURL + this.appname;
  }

  signUpUser(userdata: Object): Observable<object> {
    return this.http.post(this.apiUrl + '/users/', userdata);
  }

  signInUser(userdata: UserAuthData): Observable<any> {
    return this.http.post(this.apiUrl + '/login/', userdata);
  }

  isAuthUser()
  {
    if(this.cookieService.get('username'))
      return true;
    else
      return false;
  }
}

export interface UserAuthData {
 username: string;
 password: string;
}

