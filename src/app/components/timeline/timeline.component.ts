import {
  Input,
  Directive,
  Component,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver,
} from '@angular/core';

import { SharedService } from '../../services/shared.service';

import { NewsComponent } from '../events/news/news.component';
import { TransactionComponent } from '../events/transaction/transaction.component';


@Component({
  selector: 'timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css'],
  entryComponents: [ NewsComponent, TransactionComponent ],
})
export class TimelineComponent {
  @ViewChild("eventsContainer", {read: ViewContainerRef}) eventsContainerRef: ViewContainerRef;

  eventsConfig = {
    transaction: TransactionComponent,
    news: NewsComponent,
  };

  events = [];

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public sharedService: SharedService,
  ) { }

  ngAfterContentInit() {
    this.sharedService.currentMessage.subscribe( data => {
      console.log(data);

      if (data) {
        this.addEvent(data);
      }
    })
  }

  addEvent(message: any) {
    let target = this.eventsContainerRef;
    let widgetComponent = this.componentFactoryResolver.resolveComponentFactory(this.eventsConfig[message.type]);
    let cmpRef: any = target.createComponent(widgetComponent);
    cmpRef.instance.data = message;
    cmpRef.instance.cmpRef = cmpRef;
  }

  sortBy(field: string) {
    let childrenAray = [];
    for (let i = 0; i < this.eventsContainerRef.length; i++) {
      let ref: any = this.eventsContainerRef.get(i);
      childrenAray.push(ref._view.nodes[1].instance.data);
    }

    if (field === 'type') {
      childrenAray.sort((a, b) => {
          let typeA = a.type.toLowerCase(), typeB = b.type.toLowerCase();
          if (typeA < typeB) return -1;
          if (typeA > typeB) return 1;
          return 0;
      });
    }

    if (field === 'date') {
      childrenAray.sort((a, b) => {
        let dateA: any = new Date(a.event.date), dateB: any = new Date(b.event.date);
        return - (dateA - dateB);
      });
    }
    this.eventsContainerRef.clear();
    childrenAray.forEach(data => {
      this.addEvent(data);
    });
  }
}
