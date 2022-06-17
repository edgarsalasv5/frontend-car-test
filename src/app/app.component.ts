import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/app.interface';
import { login } from './store/actions/app.actions';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ngrx-store-walkthrough';

  constructor(private store: Store<IAppState>) {}

  login(): void {
    this.store.dispatch(login({ usernamae: 'username', password: 'password' }));
  }
}