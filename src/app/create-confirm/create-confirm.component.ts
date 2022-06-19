import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-create-confirm',
  templateUrl: './create-confirm.component.html',
  styleUrls: ['./create-confirm.component.css']
})
export class CreateConfirmComponent implements OnInit {

  @Output() modalChangeEvent =  new EventEmitter();

  onChangeModalEmit() {
    this.modalChangeEvent.emit()
  }

  constructor() { }

  ngOnInit(): void {
  }

}
