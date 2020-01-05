import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { SharedService } from '../service/shared.service';
import { error } from 'util';
import { ProjectDetailsService } from '../service/project-details.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: any;

  constructor(private cookieService: CookieService, private projectService: ProjectDetailsService, private router: Router, private authenticateService: AuthenticationService, private sharedService: SharedService) { }

  ngOnInit() {
    this.login = {
      username: '',
      password: ''
    }
  }

  signin()
  {
    this.authenticateService.signInUser(this.login).subscribe(res => {
      if(res.result == 'Success'){
          this.cookieService.set('username',res.username);
          this.cookieService.set('superuser',res.superuser);
          this.router.navigateByUrl('home');
        }
      else{
          alert('Username or password is wrong. Please enter correct credentials.')
        }
    }, error => {
      console.log(error.error);
    })
  }

}
