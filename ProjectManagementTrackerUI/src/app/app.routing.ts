import { Routes } from '@angular/router';
import { FullComponent } from './layouts/full/full.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';

export const AppRoutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
      },
      {
        path: '',
        loadChildren:
          './material-component/material.module#MaterialComponentsModule'
      },
      {
        path: 'home',
        loadChildren: './material-component/material.module#MaterialComponentsModule'
      }
    ],
    canActivate: [AuthGuard]
  },
  { path: 'register', component: RegisterComponent, pathMatch: 'full'},
  { path: 'login', component: LoginComponent, pathMatch: 'full'},
];
