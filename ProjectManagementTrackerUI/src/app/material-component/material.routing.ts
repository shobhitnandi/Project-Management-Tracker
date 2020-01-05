import { Routes } from '@angular/router';
import { CustomersComponent } from './customers/customers.component';
import { SearchCustomerComponent } from './search-customer/search-customer.component';
import { ListOfCustomerComponent } from './list-of-customer/list-of-customer.component';
import { HomeComponent } from './home/home.component';
import { ProjectInformationComponent } from './project-information/project-information.component';
import { EmployeeInformationComponent } from './employee-information/employee-information.component';
import { ManagerInformationComponent } from './manager-information/manager-information.component';
import { AssignProjectComponent } from './assign-project/assign-project.component';
import { AssignProjectInformationComponent } from './assign-project-information/assign-project-information.component';
import { AuthGuard } from '../auth.guard';

export const MaterialRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'createcustomer',
    component: CustomersComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'listofcustomer',
    component: ListOfCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'searchcustomer',
    component: SearchCustomerComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'projectdetails',
    component: ProjectInformationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'employeedetails',
    component: EmployeeInformationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'managerdetails',
    component: ManagerInformationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'assignedproject',
    component: AssignProjectInformationComponent,
    canActivate: [AuthGuard]
  }
];
