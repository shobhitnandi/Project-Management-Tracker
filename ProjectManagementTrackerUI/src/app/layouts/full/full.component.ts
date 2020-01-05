import { MediaMatcher } from '@angular/cdk/layout';
import {
  ChangeDetectorRef,
  Component,
  OnDestroy,
  AfterViewInit,
  OnInit
} from '@angular/core';
import { MenuItems } from '../../shared/menu-items/menu-items';
import { LanguageService } from 'src/app/service/language.service';
import { CookieService } from 'ngx-cookie-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-full-layout',
  templateUrl: 'full.component.html',
  styleUrls: []
})
export class FullComponent implements OnDestroy, AfterViewInit, OnInit {
 
  mobileQuery: MediaQueryList;
  language: string;
  selectedLanguage : string = "EN";
  labels:any;

  private _mobileQueryListener: () => void;

  constructor(
    private router: Router,
    private cookiesService: CookieService,
    private languageService: LanguageService,
    changeDetectorRef: ChangeDetectorRef,
    media: MediaMatcher,
    public menuItems: MenuItems
  ) {
    this.mobileQuery = media.matchMedia('(min-width: 768px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
  ngAfterViewInit() {}

  ngOnInit(): void {
    this.languageService.currentLanguage.subscribe(res => {
      this.language = res;
    })
  }

  selectLanguage(language) {
    this.selectedLanguage = language;
    this.labels = this.languageService.changeLanguage(language);
  }

  logout()
  {
    this.cookiesService.delete('username');
    this.router.navigate(['/login']);
  }
}
