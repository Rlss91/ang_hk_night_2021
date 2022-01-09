import { Injectable } from '@angular/core';
// import { Observable, Subscription } from 'rxjs';
import { Subject } from 'rxjs';

export interface ServerStatusModel {
  name: string;
  isOnline: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class ServersService {
  servers: ServerStatusModel[];
  subject = new Subject<boolean>();
  constructor() {
    this.servers = [
      { name: 'amazon1', isOnline: false },
      { name: 'amazon2', isOnline: false },
      { name: 'amazon3', isOnline: false },
      { name: 'amazon4', isOnline: false },
      { name: 'amazon5', isOnline: false },
    ];
    setInterval(() => {
      let num: number = this.getRandomIntInclusive(0, this.servers.length - 1);
      this.servers[num].isOnline = !this.servers[num].isOnline;
      this.subject.next(this.servers[num].isOnline);
    }, 1000);
  }

  // getObs(): any {
  //   return Observable.create((observer) => {
  //     setInterval(() => {
  //       let num: number = this.getRandomIntInclusive(0, this.server.length - 1);
  //       this.server[num].isOnline = !this.server[num].isOnline;
  //       switch(num){
  //         case 3:
  //           observer.complete();
  //           break;
  //         case 1:
  //             observer.error();
  //             break;
  //         default
  //           observer.next(num);
  //           break;
  //       }
  //     }, 1000);
  //   });
  // }

  getRandomIntInclusive(min: number, max: number): number {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
  }
}
