import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import User from 'src/app/model/User.model';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css'],
})
export class Child2Component implements OnInit {
  @Input() user: User;
  @Output() onDelete: EventEmitter<number>;

  constructor() {
    this.user = {
      id: NaN,
      name: '',
      email: '',
      description: '',
    };
    this.onDelete = new EventEmitter<number>();
  }

  ngOnInit(): void {}

  handleBtnClickDelete(): void {
    this.onDelete.emit(this.user.id);
  }
}
