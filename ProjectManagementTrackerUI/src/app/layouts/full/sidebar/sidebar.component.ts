import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  OnInit
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MenuItems } from '../../../shared/menu-items/menu-items';
import { LanguageService } from 'src/app/service/language.service';
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: []
})
export class AppSidebarComponent implements OnDestroy, OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  labels: any;
  _subscription: any;

  MENUITEMSS  = [
  ];

  constructor(
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems,
    private local_label: LanguageService
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnInit(): void {
    this._subscription = this.local_label.currentLanguageChange.subscribe((value) => {
      this.labels = value;
      this.MENUITEMSS = [];
      this.MENUITEMSS.push(
        { state: 'home', name: this.labels.dashboard, type: 'link', icon: 'av_timer' },
        { state: 'projectdetails', name: this.labels.projectDetails, type: 'link', icon: 'av_timer' },
        { state: 'employeedetails', name: this.labels.employeeDetails, type: 'link', icon: 'av_timer' },
        { state: 'managerdetails', name: this.labels.managerDetails, type: 'link', icon: 'av_timer' },
        { state: 'assignedproject', name: this.labels.assignedProjects, type: 'link', icon: 'av_timer' },
        { state: 'createcustomer',name: this.labels.createCustomer, type: 'link', icon: 'av_timer' },
        { state: 'listofcustomer', name: this.labels.listOfCustomer, type: 'link', icon: 'av_timer' },
        { state: 'searchcustomer', name: this.labels.searchCustomer, type: 'link', icon: 'av_timer' },
      )
    });
  }
  
  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
