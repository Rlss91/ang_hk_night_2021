import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SubjectExampleService {
  somethingHappend: Subject<number>;
  constructor() {
    this.somethingHappend = new Subject<number>();
  }

  sendNumber(numberToSend: number): void {
    this.somethingHappend.next(numberToSend);
  }

  completeSubject(): void {
    this.somethingHappend.complete();
  }

  errorSubject(): void {
    this.somethingHappend.error(NaN);
  }
}
