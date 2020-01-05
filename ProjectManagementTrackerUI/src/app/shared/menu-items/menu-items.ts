import { Injectable, OnInit } from '@angular/core';
import { LanguageService } from 'src/app/service/language.service';

export interface Menu {
  state: string;
  name: string;
  type: string;
  icon: string;
}

@Injectable()
export class MenuItems implements OnInit {
  
  labels: any;
  _subscription: any;

  MENUITEMS = [
    { state: 'home', name: 'Dashboard', type: 'link', icon: 'av_timer' },
    { state: 'projectdetails', name: 'Project Details', type: 'link', icon: 'av_timer' },
    { state: 'employeedetails', name: 'Employee Details', type: 'link', icon: 'av_timer' },
    { state: 'managerdetails', name: 'Manager Details', type: 'link', icon: 'av_timer' },
    { state: 'createcustomer', name: 'Create Customer', type: 'link', icon: 'av_timer' },
    { state: 'listofcustomer', name: 'List of Customers', type: 'link', icon: 'av_timer' },
    { state: 'searchcustomer', name: 'Search Customer', type: 'link', icon: 'av_timer' },
  ];

  constructor(private local_label: LanguageService){}
  getMenuitem(): Menu[] {
    return this.MENUITEMS;
  }

  ngOnInit(){
    
  }
}
