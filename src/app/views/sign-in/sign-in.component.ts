import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ApiService } from 'src/app/services/api.service';
import { loadCar } from 'src/app/store/modules/car/actions';
import { ISignInResponse } from './sign-in.types';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  carForm: FormGroup;
  errorMessage = '';
  loading = false;

  constructor(
    private apiService: ApiService,
    private store: Store,
    private route: Router,
    private fb: FormBuilder) {
    this.carForm = fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void { }

  onSubmit() {
    this.loading = true;
    this.apiService.signIn(this.carForm.value)
      .subscribe({
        next: (response: ISignInResponse) => this.saveSession(response),
        error: (error: string) => this.errorMessage = error,
        complete: () => this.loading = true
      });
  }

  saveSession({ access_token }: ISignInResponse) {
    localStorage.setItem('access_token', access_token);
    this.route.navigate(['/'])
    this.store.dispatch(loadCar())
  }
}
