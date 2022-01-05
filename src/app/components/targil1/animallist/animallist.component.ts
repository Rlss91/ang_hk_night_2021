import { Component, OnInit } from '@angular/core';

import AnimalItemModel from '../model/animal.model';

@Component({
  selector: 'app-animallist',
  templateUrl: './animallist.component.html',
  styleUrls: ['./animallist.component.css'],
})
export class AnimallistComponent implements OnInit {
  animalArr: AnimalItemModel[];
  constructor() {
    this.animalArr = [
      { name: 'dog' },
      { name: 'cat' },
      { name: 'snail' },
      { name: 'fish' },
      { name: 'lion' },
    ];
  }

  ngOnInit(): void {}
}
