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
  constructor() {
    super();
  }
}
