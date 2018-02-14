import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { TimelineComponent } from './components/timeline/timeline.component';
import { TransactionComponent } from './components/events/transaction/transaction.component';
import { NewsComponent } from './components/events/news/news.component';
import { AppEventComponent } from './components/add-event/add-event.component';
import { AppComponent } from './app.component';

import { SharedService } from './services/shared.service';

@NgModule({
  declarations: [
    AppComponent,
    TimelineComponent,
    NewsComponent,
    AppEventComponent,
    TransactionComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [ SharedService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
