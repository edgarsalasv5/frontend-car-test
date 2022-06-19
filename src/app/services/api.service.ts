import { Observable, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry, catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ISignInResponse } from '../views/sign-in/sign-in.types';

interface ICredentialsSignIn {
  email: string;
  password: string;
}

interface ICredentialsSignUp {
  email: string;
  name: string;
  password: string;
}

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiURL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  signIn(credentials: ICredentialsSignIn) {
    return this.http
      .post<ISignInResponse>(this.apiURL + '/auth/signin', credentials)
      .pipe(retry(1), catchError(this.handleError));
  }

  handleError(error: any) {
    let errorMessage = '';
    if (error.error) {
      errorMessage = error.error.message || `Algo salio mal`;
    } else {
      errorMessage = `Algo salio mal`;
    }

    return throwError(() => {
      return errorMessage;
    });
  }
}
