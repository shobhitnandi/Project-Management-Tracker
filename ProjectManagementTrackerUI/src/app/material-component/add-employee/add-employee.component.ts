import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FormBuilder, FormGroup, NgForm } from '@angular/forms';
import { ManagerDetails } from '../add-manager/add-manager.component';
import { ManagerDetailService } from 'src/app/service/manager-detail.service';
import { LanguageService } from 'src/app/service/language.service';

export interface EmployeeDetails {
  employeename: string;
  designation: string;
  managerid: number;
  contactno: number;
  emailid: string;
  skillsets: string;
}

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
/***
 * This class is responsible to provide the template to add employee details.
 */
export class AddEmployeeComponent implements OnInit {

  action: string;
  local_data: any;
  labels: any;
  _subscription: any;
  options: FormGroup;
  managers: ManagerDetails[];
  numberPattern = /[0-9\+\-\ ]/;

  constructor(private local_label: LanguageService, private managerDetailService: ManagerDetailService, fb: FormBuilder, public dialogRef: MatDialogRef<AddEmployeeComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: EmployeeDetails
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
    this.managerDetailService.getManagersList().subscribe(res => {
      this.managers = res;
    })
  }

  onClose() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onSubmit() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

  keyPress(event: any) {
    let inputChar = String.fromCharCode(event.charCode);
    if (event.keyCode != 8 && !this.numberPattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}


