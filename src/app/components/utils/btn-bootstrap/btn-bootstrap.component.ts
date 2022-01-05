import { Component, OnInit, Input } from '@angular/core';

export enum BtnTypes {
  primary = 'btn-primary',
  secondary = 'btn-secondary',
  success = 'btn-success',
  danger = 'btn-danger',
  warning = 'btn-warning',
  info = 'btn-info',
  light = 'btn-light',
  dark = 'btn-dark',
}

@Component({
  selector: 'app-btn-bootstrap',
  templateUrl: './btn-bootstrap.component.html',
  styleUrls: ['./btn-bootstrap.component.css'],
})
export class BtnBootstrapComponent implements OnInit {
  @Input() btnType: string;
  constructor() {
    this.btnType = BtnTypes.primary;
  }

  ngOnInit(): void {}
}
