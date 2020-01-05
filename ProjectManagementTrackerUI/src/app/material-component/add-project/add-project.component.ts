import { Component, OnInit, Inject, Optional } from '@angular/core';
import { MatDialogRef, MatSnackBar, MAT_DIALOG_DATA } from '@angular/material';
import { FormGroup, FormBuilder } from '@angular/forms';
import { LanguageService } from 'src/app/service/language.service';

export interface ProjectDetails {
  projectname: string,
  startdate: Date,
  enddate: Date,
  clientname: string;
}

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
/***
 * This class is responsible to provide the template to add project details.
 */
export class AddProjectComponent implements OnInit {

  action: string;
  local_data: any;
  labels: any;
  _subscription: any;
  options: FormGroup;
  minDate:Date = new Date();

  constructor(private local_label: LanguageService, fb: FormBuilder, public dialogRef: MatDialogRef<AddProjectComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ProjectDetails
  ) {
    this.options = fb.group({
      hideRequired: false,
      floatLabel: 'auto',
    });

    this.local_data = { ...data };
    this.action = this.local_data.action;
  }

  ngOnInit() {
    this._subscription = this.local_label.currentLanguageChange.subscribe((value) => {
      this.labels = value;
    });
  }

  onClose() {
    this.dialogRef.close({ event: this.labels.cancel });
  }

  onSubmit() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }
}

