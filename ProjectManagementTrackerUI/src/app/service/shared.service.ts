import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { MatSnackBar } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
/**
 * This service is responsible to handle common tasks across the application.
 */
export class SharedService {

  public apiURL: any;

  constructor(private _snackBar: MatSnackBar) {
    this.apiURL = environment.baseUrl;
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top',
      horizontalPosition: 'right'
    });
  }
}
