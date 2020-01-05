import { Component, OnInit, Optional, Inject } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { LanguageService } from 'src/app/service/language.service';

export interface ManagerDetails {
  managername: string,
  designation: string,
  contactno: number;
  emailid: string;
}

@Component({
  selector: 'app-add-manager',
  templateUrl: './add-manager.component.html',
  styleUrls: ['./add-manager.component.css']
})
/***
 * This class is responsible to provide the template to add manager details.
 */
export class AddManagerComponent implements OnInit {

  action: string;
  local_data: any;
  labels: any;
  _subscription: any;
  options: FormGroup;
  constructor(private local_label: LanguageService, fb: FormBuilder, public dialogRef: MatDialogRef<AddManagerComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: ManagerDetails
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

  keyPress(event: any) {
    const pattern = /[0-9\+\-\ ]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !pattern.test(inputChar)) {
      event.preventDefault();
    }
  }

  onClose() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onSubmit() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }
}

