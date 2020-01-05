import { Component, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [
  ]
})
export class AppHeaderComponent implements OnInit {
  
  labels: any;
  _subscription: any;
  loggedin: string;

  constructor( private local_label: LanguageService, private cookieService: CookieService){
  }

  ngOnInit(){

    this.loggedin = this.cookieService.get('username');
    this._subscription = this.local_label.currentLanguageChange.subscribe((value) => {
      this.labels = value;
    });
  }
}
