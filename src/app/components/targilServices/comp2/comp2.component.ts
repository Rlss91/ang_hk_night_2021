import { Component, OnInit } from '@angular/core';
import { TargilServicesService } from 'src/app/services/targil-services.service';

@Component({
  selector: 'app-comp2',
  templateUrl: './comp2.component.html',
  styleUrls: ['./comp2.component.css'],
})
export class Comp2Component implements OnInit {
  dataFromService: string;
  constructor(private targilServicesService: TargilServicesService) {
    this.dataFromService = '';
    this.targilServicesService.subject.subscribe((data) => {
      this.dataFromService = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
