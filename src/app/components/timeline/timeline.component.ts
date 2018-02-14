import {
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
  @ViewChild("eventsContainer", {read: ViewContainerRef}) eventsContainer: ViewContainerRef;

  eventsConfig = {
    transaction: TransactionComponent,
    news: NewsComponent,
  };

  constructor(
    public componentFactoryResolver: ComponentFactoryResolver,
    public sharedService: SharedService,
  ) {
  }

  ngAfterContentInit() {
    this.sharedService.currentMessage.subscribe( data => {
      console.log(data);

      if (data) {
        this.addEvent(data);
      }
    })
  }

  addEvent(message: any) {
    let target = this.eventsContainer;
    let widgetComponent = this.componentFactoryResolver.resolveComponentFactory(this.eventsConfig[message.type]);
    let cmpRef: any = target.createComponent(widgetComponent);
  }
}
