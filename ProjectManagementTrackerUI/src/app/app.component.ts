import { Component } from '@angular/core';
import { ProjectDetailsService } from './service/project-details.service';
import { LanguageService } from './service/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProjectManagementTrackerUI';

  constructor(private languageService: LanguageService) { }

  ngOnInit() {
    this.languageService.changeLanguage('EN');
  }
}
