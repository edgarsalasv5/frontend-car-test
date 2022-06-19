import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';
import { ISignInResponse } from './sign-in.types';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  credentials = { email: '', password: '' };
  errorMessage = '';

  constructor(private apiService: ApiService, private route: Router) { }
  ngOnInit(): void { }

  onSubmit() {
    this.apiService.signIn(this.credentials)
      .subscribe({
        next: (response: ISignInResponse) => this.saveSession(response),
        error: (error: string) => this.errorMessage = error,
        complete: () => console.info('complete') 
      });
  }

  saveSession({ user, access_token }: ISignInResponse) {
    localStorage.setItem('access_token', access_token);
    this.route.navigate(['/'])
  }
}
