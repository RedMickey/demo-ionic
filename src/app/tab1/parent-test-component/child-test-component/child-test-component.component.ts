import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-child-test-component',
  templateUrl: './child-test-component.component.html',
  styleUrls: ['./child-test-component.component.scss'],
})
export class ChildTestComponentComponent implements OnInit {

  @Output() valueChange: EventEmitter<any> = new EventEmitter();
  counter = 0;

  constructor() {}

  ngOnInit() {}

  handleClick() {
    this.counter++;
    console.log('Emit counter to the parent component from the child one');
    this.valueChange.emit(this.counter);
    console.log('Counter has been emitted');
  }

}
