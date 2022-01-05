import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipesexample',
  templateUrl: './pipesexample.component.html',
  styleUrls: ['./pipesexample.component.css'],
})
export class PipesexampleComponent implements OnInit {
  name: Promise<string>;
  title: string = 'some text';
  constructor() {
    this.name = new Promise<string>((resolve, reject) => {
      setTimeout(() => {
        resolve('angular');
      }, 2500);
    });
  }

  ngOnInit(): void {}
}
