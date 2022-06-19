import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-create-modal',
  templateUrl: './car-create-modal.component.html',
  styleUrls: ['./car-create-modal.component.css']
})
export class CarCreateModalComponent implements OnInit {

  confirmModalStatus = false

  @Output() modalChangeEvent =  new EventEmitter();
  constructor() { }
  ngOnInit(): void {
  }

  onChangeModalEmit() {
    this.modalChangeEvent.emit()
  }

  openModalConfirm(){
    this.confirmModalStatus = !this.confirmModalStatus
  }
}
