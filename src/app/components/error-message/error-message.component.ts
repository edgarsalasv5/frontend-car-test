import { Component, Input, Output, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'error-message',
  templateUrl: './error-message.component.html',
})
export class ErrorMessageComponent implements OnInit {

  @Input() message = ''

  constructor() { }
  ngOnInit(): void {
  }
}
