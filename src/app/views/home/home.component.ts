import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  filterStatus = false
  carCreateModalStatus = false

  constructor() { }
  ngOnInit(): void { }

  openFilter() {
    this.filterStatus = !this.filterStatus
  }

  openModalCreateCar(){
    this.carCreateModalStatus = !this.carCreateModalStatus
  }
}
