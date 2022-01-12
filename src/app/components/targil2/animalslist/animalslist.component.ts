import { Component, OnInit } from '@angular/core';
import { AnimalsserviceService } from 'src/app/services/animalsservice.service';

@Component({
  selector: 'app-animalslist',
  templateUrl: './animalslist.component.html',
  styleUrls: ['./animalslist.component.css'],
})
export class AnimalslistComponent implements OnInit {
  animalsArr: string[];
  constructor(private animalsserviceService: AnimalsserviceService) {
    // this.animalsArr = this.animalsserviceService.animals;
    this.animalsArr = [];
  }

  ngOnInit(): void {
    this.animalsserviceService.animalAddedSubject.subscribe(() => {
      this.animalsArr = this.animalsserviceService.animals;
    });
  }

  handleRemoveAnimal(animal: string): void {
    this.animalsserviceService.removeAnimal(animal);
  }
}
