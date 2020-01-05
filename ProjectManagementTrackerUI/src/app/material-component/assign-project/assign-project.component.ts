import { Component, OnInit, Inject, Optional, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { AssignProjectService } from 'src/app/service/assign-project.service';
import { LanguageService } from 'src/app/service/language.service';
import { ProjectDetailsService } from 'src/app/service/project-details.service';
import { EmployeeDetailService } from 'src/app/service/employee-detail.service';
import { EmployeeDetails } from '../add-employee/add-employee.component';
import { ProjectDetails } from '../add-project/add-project.component';

export interface AssignProjectDetails {
  projectid: number;
  employeeid: number;
  startdate: Date;
  enddate: Date;
  completiontime: number;
  taskstatus: string;
  comment: string;
}

@Component({
  selector: 'app-assign-project',
  templateUrl: './assign-project.component.html',
  styleUrls: ['./assign-project.component.css']
})
export class AssignProjectComponent implements OnInit {

  action: string;
  local_data: any;
  labels: any;
  _subscription: any;
  options: FormGroup;
  employees: EmployeeDetails[];
  projects: ProjectDetails[];
  status = [
    { statusname : 'Open'},
    { statusname : 'In Progress'},
    { statusname : 'Completed'},
    { statusname : 'Cancelled'},
  ];
  
  constructor(private projectDetailService: ProjectDetailsService, private employeeDetailService: EmployeeDetailService, private local_label: LanguageService, private assignProjectService: AssignProjectService, fb: FormBuilder, public dialogRef: MatDialogRef<AssignProjectComponent>,
    @Optional() @Inject(MAT_DIALOG_DATA) public data: AssignProjectDetails
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

    this.employeeDetailService.getEmployeeList().subscribe(res => {
      this.employees = res;
    });

    this.projectDetailService.getProjectsList().subscribe(res => {
      this.projects = res;
    });
    
  }

  onClose() {
    this.dialogRef.close({ event: 'Cancel' });
  }

  onSubmit() {
    this.dialogRef.close({ event: this.action, data: this.local_data });
  }

}


