import { Component, OnInit } from '@angular/core';
import { AnimalsserviceService } from 'src/app/services/animalsservice.service';

@Component({
  selector: 'app-animalsnew',
  templateUrl: './animalsnew.component.html',
  styleUrls: ['./animalsnew.component.css'],
})
export class AnimalsnewComponent implements OnInit {
  animalInput: string;
  constructor(private animalsserviceService: AnimalsserviceService) {
    this.animalInput = '';
  }

  ngOnInit(): void {}

  handleBtnClick(): void {
    this.animalsserviceService.addNewAnimal(this.animalInput);
  }
}
