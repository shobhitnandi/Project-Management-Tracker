import { Component, OnInit, ViewChild } from '@angular/core';
import { EmployeeDetailService } from 'src/app/service/employee-detail.service';
import { SharedService } from 'src/app/service/shared.service';
import { MatPaginator, MatTableDataSource, MatDialog } from '@angular/material';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-employee-information',
  templateUrl: './employee-information.component.html',
  styleUrls: ['./employee-information.component.css']
})
/***
 * This class is responsible to update, delete and delete all employee details.
 */
export class EmployeeInformationComponent implements OnInit {

  labels: any;
  _subscription: any;
  displayedColumns: string[] = ['id', 'employeename', 'designation', 'managerid', 'contactno', 'emailid', 'skillsets', 'action'];
  dataSource: MatTableDataSource<EmployeeTable>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private local_label: LanguageService, private dialog: MatDialog, private employeeDetailService: EmployeeDetailService, private sharedService: SharedService) {
    this.dataSource = new MatTableDataSource<EmployeeTable>();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._subscription = this.local_label.currentLanguageChange.subscribe((value) => {
      this.labels = value;
    });

    this.updateEmployeeList();
  }

   /***
   * This method is responsible to fetch all the employees details and displayed in tabular format. 
   */
  updateEmployeeList() {
    this.employeeDetailService.getEmployeeList().subscribe(res => {
      this.dataSource.data = res;
    })
  }

  openDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddEmployeeComponent, {
      disableClose: true,
      hasBackdrop: true,
      backdropClass: '',
      width: '350px',
      height: '',
      position: {
        top: '',
        bottom: '',
        left: '',
        right: ''
      },
      data: obj
    });

    dialogRef.afterClosed().subscribe(result => {
      if (result.event == this.labels.update) {
        this.updateEmployeeRowData(result.data);
      } else if (result.event == this.labels.delete) {
        this.deleteEmployeeRowData(result.data);
      }
    });
  }

  
  /***
   * This method is responsible to update the employee details based upon the id parameter.
   */
  updateEmployeeRowData(row_obj) {
    this.employeeDetailService.updateEmployee(row_obj.id, {
      employeename: row_obj.employeename,
      designation: row_obj.designation,
      managerid: row_obj.managerid,
      contactno: row_obj.contactno,
      emailid: row_obj.emailid,
      skillsets: row_obj.skillsets
    }).subscribe(res => {
      this.sharedService.openSnackBar(this.labels.employeeUpdated, "");
      this.updateEmployeeList();
    });
  }

   
  /***
   * This method is responsible to delete the employee details based upon the id parameter.
   */
  deleteEmployeeRowData(row_obj) {
    this.employeeDetailService.deleteEmployee(row_obj.id).subscribe(res => {
      this.sharedService.openSnackBar(this.labels.employeeDeleted, "");
      this.updateEmployeeList();
    });
  }

   
  /***
   * This method is responsible to delete all the employee details.
   */
  deleteAllEmployees() {
    this.employeeDetailService.deleteAllEmployee().subscribe(res => {
      this.sharedService.openSnackBar(this.labels.allEmployeeDeleted, "");
      this.updateEmployeeList();
    })
  }
}

export interface EmployeeTable {
  id: number;
  employeename: string;
  designation: string;
  managerid: number;
  contactno: number;
  emailid: string;
  skillsets: string;
}
