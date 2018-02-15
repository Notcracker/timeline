import { Component, Input } from '@angular/core';
import { EventWindow } from '../event.base';

@Component({
  selector: 'transaction',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionComponent extends EventWindow {
  @Input() data;
  @Input() cmpRef;
  constructor() {
    super();
  }
}
