import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public openedBy = false;
  public openedData = {};

  ngAfterContentInit() {
    if (window.opener && window.event) {
      this.openedBy = true;
      this.openedData = window.event;
    }
  }
}
