import { Injectable } from '@angular/core';
import { Subject, BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LanguageService {
  LanguageChange: BehaviorSubject<Array<any>> = new BehaviorSubject([]);
  currentLanguageChange = this.LanguageChange.asObservable();
  currentLanguageName: BehaviorSubject<string> = new BehaviorSubject('English');
  currentLanguage = this.currentLanguageName.asObservable();

  constructor(private http: HttpClient) {
  }

  public getEnglishJSON(): Observable<any> {
    return this.http.get("../../assets/localize/eng.json");
  }

  public getGermanJSON(): Observable<any> {
    return this.http.get("../../assets/localize/de.json");
  }

  public getChineseJSON(): Observable<any> {
    return this.http.get("../../assets/localize/china.json");
  }

  public changeLanguage(language) {
    if (language == 'EN') {
      this.getEnglishJSON().subscribe(data => {
        this.LanguageChange.next(data);
      });
      this.setCurrentLanguage('English');

    }
    else if (language == 'DE') {
      this.getGermanJSON().subscribe(data => {
        this.LanguageChange.next(data);
      });
      this.setCurrentLanguage('German');

    }
    else if (language == 'CH') {
      this.getChineseJSON().subscribe(data => {
        this.LanguageChange.next(data);
      });
      this.setCurrentLanguage('Chinese');

    }
  }

  setLanguage(language) {
    this.LanguageChange.next(language);
  }
  setCurrentLanguage(data) {
    this.currentLanguageName.next(data);
  }

}
