import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { LanguageService } from 'src/app/service/language.service';
import { AssignProjectComponent } from '../assign-project/assign-project.component';
import { AssignProjectService } from 'src/app/service/assign-project.service';
import { SharedService } from 'src/app/service/shared.service';

@Component({
  selector: 'app-assign-project-information',
  templateUrl: './assign-project-information.component.html',
  styleUrls: ['./assign-project-information.component.css']
})
export class AssignProjectInformationComponent implements OnInit {

  labels: any;
  _subscription: any;
  displayedColumns: string[] = ['id', 'projectid', 'employeeid', 'startdate', 'enddate', 'completiontime', 'taskstatus', 'comment', 'action'];
  dataSource: MatTableDataSource<AssignProjectTable>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private local_label: LanguageService, private dialog: MatDialog, private assignProjectDetailService: AssignProjectService, private sharedService: SharedService) {
    this.dataSource = new MatTableDataSource<AssignProjectTable>();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._subscription = this.local_label.currentLanguageChange.subscribe((value) => {
      this.labels = value;
    });
    this.updateAssignProjectList();
  }

   /***
   * This method is responsible to fetch all the employees details and displayed in tabular format. 
   */
  updateAssignProjectList() {
    this.assignProjectDetailService.getAssignProjectList().subscribe(res => {
      this.dataSource.data = res;
    })
  }

  openDialog(action, obj) {
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
      if (result.event == this.labels.update) {
        this.updateAssignProjectRowData(result.data);
      } else if (result.event == this.labels.delete) {
        this.deleteAssignProjectRowData(result.data);
      }
    });
  }

  
  /***
   * This method is responsible to update the employee details based upon the id parameter.
   */
  updateAssignProjectRowData(row_obj) {
    this.assignProjectDetailService.updateAssignProject(row_obj.id, {
      projectid: row_obj.projectid,
      employeeid: row_obj.employeeid,
      startdate: row_obj.startdate,
      enddate: row_obj.enddate,
      completiontime: row_obj.completiontime,
      taskstatus: row_obj.taskstatus,
      comment: row_obj.comment
    }).subscribe(res => {
      this.sharedService.openSnackBar(this.labels.updateAssignedProject, "");
      this.updateAssignProjectList();
    });
  }

   
  /***
   * This method is responsible to delete the employee details based upon the id parameter.
   */
  deleteAssignProjectRowData(row_obj) {
    this.assignProjectDetailService.deleteAssignProject(row_obj.id).subscribe(res => {
      this.sharedService.openSnackBar(this.labels.assignedProjectDeleted, "");
      this.updateAssignProjectList();
    });
  }

   
  /***
   * This method is responsible to delete all the employee details.
   */
  deleteAllAssignProject() {
    this.assignProjectDetailService.deleteAllAssignProject().subscribe(res => {
      this.sharedService.openSnackBar(this.labels.allAssignedProjectDeleted, "");
      this.updateAssignProjectList();
    })
  }
}

export interface AssignProjectTable {
  id: number;
  projectid: number;
  employeeid: number;
  startdate: Date;
  enddate: Date;
  completiontime: number;
  taskstatus: string;
  comment: string;
}

