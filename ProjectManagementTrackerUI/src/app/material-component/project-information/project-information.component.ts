import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource, MatPaginator, MatDialog } from '@angular/material';
import { ProjectDetailsService } from 'src/app/service/project-details.service';
import { SharedService } from 'src/app/service/shared.service';
import { AddProjectComponent } from '../add-project/add-project.component';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-project-information',
  templateUrl: './project-information.component.html',
  styleUrls: ['./project-information.component.css']
})
/***
 * This class is responsible to update, delete and delete all project details.
 */
export class ProjectInformationComponent implements OnInit {
  
  labels: any;
  _subscription: any;
  displayedColumns: string[] = ['id', 'projectname', 'startdate', 'enddate', 'clientname', 'action'];
  dataSource: MatTableDataSource<ProjectTable>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private local_label: LanguageService, private dialog: MatDialog, private projectDetailService: ProjectDetailsService, private sharedService: SharedService) {
    this.dataSource = new MatTableDataSource<ProjectTable>();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._subscription = this.local_label.currentLanguageChange.subscribe((value) => {
      this.labels = value;
    });
    this.updateProjectList();
  }

  /***
   * This method is responsible to fetch all the projects details and displayed in tabular format. 
   */
  updateProjectList() {
    this.projectDetailService.getProjectsList().subscribe(res => {
      this.dataSource.data = res;
    })
  }

  openDialog(action, obj) {
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
      if (result.event == this.labels.update) {
        this.updateProjectRowData(result.data);
      } else if (result.event == this.labels.delete) {
        this.deleteProjectRowData(result.data);
      }
    });
  }

  
  /***
   * This method is responsible to update the project details based upon the id parameter.
   */
  updateProjectRowData(row_obj) {
    this.projectDetailService.updateProject(row_obj.id, {
      projectname: row_obj.projectname,
      startdate: row_obj.startdate,
      enddate: row_obj.enddate,
      clientname: row_obj.clientname
    }).subscribe(res => {
      this.sharedService.openSnackBar(this.labels.projectUpdated, "Success");
      this.updateProjectList();
    });
  }

  /***
   * This method is responsible to delete the project details based upon the id parameter.
   */
  deleteProjectRowData(row_obj) {
    this.projectDetailService.deleteProject(row_obj.id).subscribe(res => {
      this.sharedService.openSnackBar(this.labels.projectDeleted, "");
      this.updateProjectList();
    });
  }

  /***
   * This method is responsible to delete all the project details.
   */
  deleteAllProjects() {
    this.projectDetailService.deleteAllProject().subscribe(res => {
      this.sharedService.openSnackBar(this.labels.allProjectDeleted, "");
      this.updateProjectList();
    })
  }
}

export interface ProjectTable {
  id: number;
  projectname: string;
  startdate: Date;
  enddate: Date;
  clientname: string
}