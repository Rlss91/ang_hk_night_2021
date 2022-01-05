import { Component, Input, OnInit } from '@angular/core';
import AnimalItemModel from '../model/animal.model';

@Component({
  selector: 'app-animalitem',
  templateUrl: './animalitem.component.html',
  styleUrls: ['./animalitem.component.css'],
})
export class AnimalitemComponent implements OnInit {
  @Input() lineBackgroundColor: string;
  constructor() {
    this.lineBackgroundColor = 'transparent';
  }

  ngOnInit(): void {}
}
