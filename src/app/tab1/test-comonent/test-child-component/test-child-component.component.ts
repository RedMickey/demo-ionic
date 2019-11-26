import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-test-child-component',
  templateUrl: './test-child-component.component.html',
  styleUrls: ['./test-child-component.component.scss'],
})
export class TestChildComponentComponent implements OnInit {

  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  counter = 0;

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.counter = this.counter + 1;
    this.valueChange.emit(this.counter);
    console.log('Hey I am clicked in child');
  }

}
