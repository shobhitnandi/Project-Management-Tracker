import { Component, OnInit, ViewChild } from '@angular/core';
import { AddManagerComponent } from '../add-manager/add-manager.component';
import { ManagerDetailService } from 'src/app/service/manager-detail.service';
import { MatDialog, MatTableDataSource, MatPaginator } from '@angular/material';
import { SharedService } from 'src/app/service/shared.service';
import { LanguageService } from 'src/app/service/language.service';

@Component({
  selector: 'app-manager-information',
  templateUrl: './manager-information.component.html',
  styleUrls: ['./manager-information.component.css']
})
/***
 * This class is responsible to update, delete and delete all manager details.
 */
export class ManagerInformationComponent implements OnInit {

  labels: any;
  _subscription: any;
  displayedColumns: string[] = ['id', 'managername', 'designation', 'contactno', 'emailid', 'action'];
  dataSource: MatTableDataSource<ManagerTable>;
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;

  constructor(private local_label: LanguageService, private dialog: MatDialog, private managerDetailService: ManagerDetailService, private sharedService: SharedService) {
    this.dataSource = new MatTableDataSource<ManagerTable>();
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this._subscription = this.local_label.currentLanguageChange.subscribe((value) => {
      this.labels = value;
    });
    this.updateManagerList();
  }

   /***
   * This method is responsible to fetch all the manager details and displayed in tabular format. 
   */
  updateManagerList() {
    this.managerDetailService.getManagersList().subscribe(res => {
      this.dataSource.data = res;
    })
  }

  openDialog(action, obj) {
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
      if (result.event == this.labels.update) {
        this.updateManagerRowData(result.data);
      } else if (result.event == this.labels.delete) {
        this.deleteManagerRowData(result.data);
      }
    });
  }

  /***
   * This method is responsible to update the manager details based upon the id parameter.
   */
  updateManagerRowData(row_obj) {
    this.managerDetailService.updateManager(row_obj.id, {
      managername: row_obj.managername,
      designation: row_obj.designation,
      contactno: row_obj.contactno,
      emailid: row_obj.emailid
    }).subscribe(res => {
      this.sharedService.openSnackBar(this.labels.managerUpdated, "");
      this.updateManagerList();
    });
  }

  /***
   * This method is responsible to delete the manager details based upon the id parameter.
   */
  deleteManagerRowData(row_obj) {
    this.managerDetailService.deleteManager(row_obj.id).subscribe(res => {
      this.sharedService.openSnackBar(this.labels.managerDeleted, "");
      this.updateManagerList();
    });
  }

  /***
   * This method is responsible to delete all the manager details.
   */
  deleteAllManagers() {
    this.managerDetailService.deleteAllManager().subscribe(res => {
      this.sharedService.openSnackBar(this.labels.allManagerDeleted, "");
      this.updateManagerList();
    })
  }
}

export interface ManagerTable {
  id: number;
  managername: string,
  designation: string,
  contactno: number;
  emailid: string;
}
