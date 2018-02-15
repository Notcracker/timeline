import { Component, Input } from '@angular/core';
import { EventWindow } from '../event.base';

@Component({
  selector: 'transaction-window',
  templateUrl: './transaction.component.html',
  styleUrls: ['./transaction.component.css']
})
export class TransactionWindowComponent extends EventWindow {
  @Input() data;
  constructor() {
    super();
  }
}
