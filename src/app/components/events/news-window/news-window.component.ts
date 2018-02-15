import { Component, Input } from '@angular/core';
import { EventWindow } from '../event.base';

@Component({
  selector: 'news-window',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsWindowComponent extends EventWindow {
  @Input() data;
  constructor() {
    super();
  }
}
