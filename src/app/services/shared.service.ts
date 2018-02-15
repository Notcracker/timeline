import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class SharedService {
  private messageSource;
  public currentMessage;

  constructor() {
    this.messageSource = new BehaviorSubject(null);
    this.currentMessage = this.messageSource.asObservable();
  }

  changeMessage(message: any) {
    this.messageSource.next(message)
  }

}
