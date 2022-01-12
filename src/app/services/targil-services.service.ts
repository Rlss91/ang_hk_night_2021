import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TargilServicesService {
  data: string;
  subject = new Subject<string>();
  constructor() {
    this.data = '';
  }

  setData(value: string): void {
    this.data = value;
    this.subject.next(this.data);
  }

  getData(): string {
    return this.data;
  }
}
