import { Component, OnInit } from '@angular/core';
import { SubjectExampleService } from 'src/app/services/subject-example.service';

@Component({
  selector: 'app-subject-child1',
  templateUrl: './subject-child1.component.html',
  styleUrls: ['./subject-child1.component.css'],
})
export class SubjectChild1Component implements OnInit {
  constructor(private subjectExample: SubjectExampleService) {}

  ngOnInit(): void {}

  handleBtnNextClick(): void {
    this.subjectExample.sendNumber(new Date().getMilliseconds());
  }

  handleBtnCompleteClick(): void {
    this.subjectExample.completeSubject();
  }

  handleBtnErrorClick(): void {
    this.subjectExample.errorSubject();
  }
}
