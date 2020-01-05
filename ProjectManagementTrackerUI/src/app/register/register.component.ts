import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { AuthenticationService } from '../service/authentication.service';
import { SharedService } from '../service/shared.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  register: any;

  constructor(private router: Router, private authenticateService: AuthenticationService, private sharedService: SharedService) { }

  ngOnInit() 
  {
    this.register = {
      email: '',
      username: '',
      password: ''
    }
  }

  signup()
  {
    this.authenticateService.signUpUser(this.register).subscribe(res => {
      this.sharedService.openSnackBar('User successfully created','');
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 1000); 
    }, error => {
      alert(error.error.username[0])
    })
  }

}
