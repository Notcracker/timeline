import { Component, Input } from '@angular/core';
import { EventWindow } from '../event.base';

@Component({
  selector: 'news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent extends EventWindow {
  @Input() data;
  @Input() cmpRef;
  hasBeenRead;
  id;

  constructor() {
    super();
    this.id = Math.random();
  }

  ngAfterContentInit() {
    this.hasBeenRead = this.data.event.hasBeenRead;
  }

  resetColor() {
    window.document.getElementById(this.id).classList.add('aquired');
    this.hasBeenRead = true;
  }
}
