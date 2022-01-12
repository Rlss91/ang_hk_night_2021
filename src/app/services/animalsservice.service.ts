import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalsserviceService {
  animals: string[];
  animalAddedSubject = new Subject<any>();
  constructor() {
    this.animals = [];
  }

  addNewAnimal(animal: string): boolean {
    for (let item of this.animals) {
      if (item === animal) {
        return false;
      }
    }
    this.animals = [...this.animals, animal];
    // console.log(this.animals);
    this.animalAddedSubject.next();
    return true;
  }

  removeAnimal(animal: string): void {
    this.animals = this.animals.filter((item) => item != animal);
    this.animalAddedSubject.next();
  }
}
