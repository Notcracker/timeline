import { Component, Input } from '@angular/core';

@Component({
  selector: 'news-window',
  templateUrl: './news-window.component.html',
  styleUrls: ['./news-window.component.css']
})
export class NewsWindowComponent {
  @Input() data;

  markNews() {
    localStorage.removeItem('event');
    this.data.event.hasBeenRead= true;
  }
}
