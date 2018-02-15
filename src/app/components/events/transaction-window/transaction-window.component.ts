import { Component, Input } from '@angular/core';

@Component({
  selector: 'transaction-window',
  templateUrl: './transaction-window.component.html',
  styleUrls: ['./transaction-window.component.css']
})
export class TransactionWindowComponent {
  @Input() data;

  deleteTransaction() {
    localStorage.removeItem('event');
  }
}
