import { Component, OnInit } from '@angular/core';
import { TargilServicesService } from 'src/app/services/targil-services.service';

@Component({
  selector: 'app-comp1',
  templateUrl: './comp1.component.html',
  styleUrls: ['./comp1.component.css'],
})
export class Comp1Component implements OnInit {
  dataFromService: string;
  constructor(private targilServicesService: TargilServicesService) {
    this.dataFromService = '';
    this.targilServicesService.subject.subscribe((data) => {
      this.dataFromService = data;
      console.log(data);
    });
  }

  handleBtnClick(): void {
    this.targilServicesService.setData('123456');
    // console.log(this.targilServicesService.getData());
  }

  ngOnInit(): void {}
}
