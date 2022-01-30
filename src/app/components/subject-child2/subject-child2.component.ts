import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubjectExampleService } from 'src/app/services/subject-example.service';

@Component({
  selector: 'app-subject-child2',
  templateUrl: './subject-child2.component.html',
  styleUrls: ['./subject-child2.component.css'],
})
export class SubjectChild2Component implements OnInit, OnDestroy {
  subjectListener: Subscription;
  numberFromSubject: number;
  constructor(private subjectExample: SubjectExampleService) {
    this.numberFromSubject = 0;
    this.subjectListener = this.subjectExample.somethingHappend.subscribe(
      (number: number) => {
        this.numberFromSubject = number;
      },
      (err) => {
        console.log('error happend', err);
      },
      () => {
        console.log('subject completed');
      }
    );
  }

  ngOnInit(): void {}

  ngOnDestroy(): void {
    this.subjectListener.unsubscribe();
  }
}
