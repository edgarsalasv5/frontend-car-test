import { Component } from '@angular/core';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  // styleUrls: ['./app.component.css'],
})
export class AppHeader {
  title = 'app-header';
  isHidden = true;

  onChangeOptionsMenu() {
    this.isHidden = !this.isHidden
  }

}