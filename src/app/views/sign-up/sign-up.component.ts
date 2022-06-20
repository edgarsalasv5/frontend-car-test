import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { loadCar } from 'src/app/store/modules/car/actions';
import { ISignUpResponse } from './sign-up.types';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  credentials = { name: '', email: '', password: '' };
  errorMessage = '';

  constructor(private apiService: ApiService, private store: Store, private route: Router) { }

  ngOnInit(): void { }

  onSubmit() {
    this.apiService.signUp(this.credentials)
      .subscribe({
        next: (response: ISignUpResponse) => this.saveSession(response),
        error: (error: string) => this.errorMessage = error,
        complete: () => console.info('complete') 
      });
  }

  saveSession({ user, access_token }: ISignUpResponse) {
    localStorage.setItem('access_token', access_token);
    this.route.navigate(['/'])
    this.store.dispatch(loadCar())
  }
}
