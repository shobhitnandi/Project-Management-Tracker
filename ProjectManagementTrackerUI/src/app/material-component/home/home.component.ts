import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material';
import { AddProjectComponent } from '../add-project/add-project.component';
import { ProjectDetailsService } from 'src/app/service/project-details.service';
import { SharedService } from 'src/app/service/shared.service';
import { AddEmployeeComponent } from '../add-employee/add-employee.component';
import { AddManagerComponent, ManagerDetails } from '../add-manager/add-manager.component';
import { ManagerDetailService } from 'src/app/service/manager-detail.service';
import { EmployeeDetailService } from 'src/app/service/employee-detail.service';
import { AssignProjectComponent } from '../assign-project/assign-project.component';
import { LanguageService } from 'src/app/service/language.service';
import { AssignProjectService } from 'src/app/service/assign-project.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

/***
 * This class is responsible to add project, add employee and add manager details.
 */
export class HomeComponent implements OnInit {

  labels: any;
  _subscription: any;
  openproject: number = 0;
  inprogressproject: number = 0;
  completedproject: number = 0;
  cancelledproject: number = 0;

  constructor(private local_label: LanguageService, private sharedService: SharedService, private managerDetailService: ManagerDetailService, private projectDetailService: ProjectDetailsService, private employeeDetailService: EmployeeDetailService, private assignProjectDetailService: AssignProjectService, public dialog: MatDialog) {
  }

  ngOnInit() {
    this._subscription = this.local_label.currentLanguageChange.subscribe((value) => {
      this.labels = value;
    });

    this.updateTile();
  }

  updateTile()
  {
    this.assignProjectDetailService.getAssignProjectList().subscribe(res => {
      this.openproject = 0;
      this.inprogressproject = 0;
      this.completedproject = 0;
      this.cancelledproject = 0;
      res.forEach(element => {
        if(element.taskstatus === 'Open')
        {
          this.openproject++;
        }
        else if(element.taskstatus === 'In Progress')
        {
          this.inprogressproject++;
        }
        else if(element.taskstatus === 'Completed')
        {
          this.completedproject++;
        }
        else if(element.taskstatus === 'Cancelled')
        {
          this.cancelledproject++;
        }
      });
    })
  }

  /***
   * This method is responsible to open add project detail pop up.
   */
  openProjectDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddProjectComponent, {
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
      if (result.event == this.labels.add) {
        this.addProjectRowData(result.data);
      }
    });
  }

  /***
   * This method is responsible to open add employee detail pop up.
   */
  openEmployeeDialog(action, obj) {
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
      if (result.event == this.labels.add) {
        this.addEmployeeRowData(result.data);
      }
    });
  }

  /***
   * This method is responsible to open add manager detail pop up.
   */
  openManagerDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AddManagerComponent, {
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
      if (result.event == this.labels.add) {
        this.addManagerRowData(result.data);
      }
    });
  }

  openAssignProjectDialog(action, obj) {
    obj.action = action;
    const dialogRef = this.dialog.open(AssignProjectComponent, {
      disableClose: true,
      hasBackdrop: true,
      backdropClass: '',
      width: '600px',
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
      if (result.event == this.labels.add) {
        this.addAssignProjectRowData(result.data);
      }
    });
  }

  /***
   * This method is responsible to add project detail.
   */
  addProjectRowData(row_obj) {
    this.projectDetailService.createProject(row_obj)
      .subscribe(
        data => {
          this.sharedService.openSnackBar(this.labels.projectAdded, "");
        },
        error => console.log(error));
  }

  /***
   * This method is responsible to add employee detail.
   */
  addEmployeeRowData(row_obj) {
    this.employeeDetailService.createEmployee(row_obj)
      .subscribe(
        data => {
          this.sharedService.openSnackBar(this.labels.employeeAdded, "");
        },
        error => console.log(error));
  }

  /***
   * This method is responsible to add manager detail.
   */
  addManagerRowData(row_obj) {
    this.managerDetailService.createManager(row_obj)
      .subscribe(
        data => {
          this.sharedService.openSnackBar(this.labels.managerAdded, "");
        },
        error => console.log(error.error));
  }

   /***
   * This method is responsible to add assign project detail.
   */
  addAssignProjectRowData(row_obj) {
    this.assignProjectDetailService.createAssignProject(row_obj)
      .subscribe(
        data => {
          this.sharedService.openSnackBar(this.labels.assignedProject, "");
          this.updateTile();
        },
        error => console.log(error.error));
  }
}

