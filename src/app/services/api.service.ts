import { Observable, of, throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { retry, catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { ISignInResponse } from '../views/sign-in/sign-in.types';
import { iCar } from '../store/modules/car/types';

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

  signUp(credentials: ICredentialsSignUp) {
    return this.http
      .post<ISignInResponse>(this.apiURL + '/auth/signup', credentials)
      .pipe(retry(1), catchError(this.handleError));
  }

  loadCar(): Observable<iCar[]> {
    return this.http.get<iCar[]>(this.apiURL + '/car').pipe(
      map((cars) => {
        return cars;
      })
    );
  }

  saveCar(car: iCar): Observable<iCar> {
    return this.http.post<iCar>(this.apiURL + '/car', car).pipe(
      map((car) => {
        if (!car) throw new Error('not found');
        return car;
      })
    )
  }

  deleteCar(id: string): Observable<iCar> {
    return this.http.delete<iCar>(this.apiURL + '/car/' + id).pipe(map((response) => response))
  }

  updateCar(car: iCar, id: string): Observable<iCar> {
    return this.http.put<iCar>(this.apiURL + '/car/' + id, car)
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
