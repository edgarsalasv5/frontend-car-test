import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void { }

  onSubmit() {
    this.loading = true 
    this.apiService.signUp(this.carForm.value)
      .subscribe({
        next: (response: ISignUpResponse) => this.saveSession(response),
        error: (error: string) => this.errorMessage = error,
        complete: () => this.loading = false 
      });
  }

  saveSession({ user, access_token }: ISignUpResponse) {
    localStorage.setItem('access_token', access_token);
    this.route.navigate(['/'])
    this.store.dispatch(loadCar())
  }
}
