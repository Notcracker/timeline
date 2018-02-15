import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public openedBy = false;

  ngAfterContentInit() {
    if (window.opener) {
      this.openedBy = true;
      console.log(localStorage.getItem('test'));
    }
  }
}
