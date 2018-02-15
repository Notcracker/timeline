import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { SharedService } from '../../services/shared.service';

@Component({
  selector: 'add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css'],
})
export class AppEventComponent {
  title = 'add-event';
  selectedEvent = '';
  events = [ 'News', 'Transaction' ];
  eventsConfig = {
    transaction: {
      sumOfTransaction: '',
      currency: '',
      sender: '',
      description: '',
      type: '',
      date: '',
    },
    news: {
      headerOfNews: '',
      news: '',
      date: '',
    },
  };

  transactionGroup: FormGroup;
  newsGroup: FormGroup;

  constructor(
    public sharedService: SharedService,
    public formBuilder: FormBuilder,
  ) {
    this.transactionGroup = this.formBuilder.group({
      sumOfTransaction: ['', Validators.required ],
      currency: ['', Validators.required ],
      sender: ['', Validators.required ],
      description: ['', Validators.required ],
      type: ['', Validators.required ],
      date: ['', Validators.required ],
    });
    this.newsGroup = this.formBuilder.group({
      headerOfNews: ['', Validators.required ],
      news: ['', Validators.required ],
      date: ['', Validators.required ],
    });
  }


  eventSelected(event) {
    this.transactionGroup.reset();
    this.newsGroup.reset();
  }

  addEvent() {
    let type = this.selectedEvent.toLowerCase();

    this.sharedService.changeMessage({ type, event: this.eventsConfig[type] });
    this.selectedEvent = '';
  }
}
