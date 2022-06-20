import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-delete-confirm',
  templateUrl: './delete-confirm.component.html',
  styleUrls: ['./delete-confirm.component.css']
})
export class DeleteConfirmComponent implements OnInit {
  @Output() modalChangeEvent =  new EventEmitter();
  @Output() deleteCarEvent =  new EventEmitter();
  @Input() loading = false;
  
  constructor() { }
  ngOnInit(): void { }

  onChangeModalEmit() {
    this.modalChangeEvent.emit()
  }

  deleteCarEmit() {
    this.deleteCarEvent.emit()
  }
}
