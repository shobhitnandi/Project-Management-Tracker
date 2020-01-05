import 'hammerjs';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { MaterialRoutes } from './material.routing';
import { MaterialModule } from '../material-module';
import { CustomersComponent } from './customers/customers.component';
import { ListOfCustomerComponent } from './list-of-customer/list-of-customer.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjectComponent } from './add-project/add-project.component';
import { HomeComponent } from './home/home.component';
import { MatDatepickerModule, DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE, MatSelectModule, MatButtonModule, MatInputModule } from '@angular/material';
import { ProjectInformationComponent } from './project-information/project-information.component';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { AddManagerComponent } from './add-manager/add-manager.component';
import { ManagerInformationComponent } from './manager-information/manager-information.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { AssignProjectInformationComponent } from './assign-project-information/assign-project-information.component';

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'YYYY-MM-DD',
    monthYearLabel: 'YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'YYYY',
  },
};

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    MatDatepickerModule,
    MatSelectModule,
    RouterModule.forChild(MaterialRoutes)
  ],
  providers: [
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  entryComponents: [AddProjectComponent, AddEmployeeComponent, AddManagerComponent, AssignProjectComponent],
  declarations: [
    CustomersComponent,
    ListOfCustomerComponent,
    SearchCustomerComponent,
    HomeComponent,
    AddProjectComponent,
    ProjectInformationComponent,
    AddEmployeeComponent,
    AddManagerComponent,
    ManagerInformationComponent,
    EmployeeInformationComponent,
    AssignProjectComponent,
    AssignProjectInformationComponent
  ]
})
export class MaterialComponentsModule { }
