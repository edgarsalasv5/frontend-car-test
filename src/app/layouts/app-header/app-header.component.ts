import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css'],
})
export class AppHeader {
  title = 'app-header';
  isHidden = true;

  constructor(private route: Router) { }

  onChangeOptionsMenu() {
    this.isHidden = !this.isHidden
  }

  signOut() {
    localStorage.removeItem('access_token');
    this.route.navigate(['/signin'])
  }

}