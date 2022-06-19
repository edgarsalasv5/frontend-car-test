import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { IAppState } from './store/app.interface';
import { login } from './store/app.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app-admin-car';
  constructor(private store: Store<IAppState>) {}
}