import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-comonent',
  templateUrl: './test-comonent.component.html',
  styleUrls: ['./test-comonent.component.scss'],
})
export class TestComonentComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  displayCounter(count) {
    console.log("From Emitter " + count);
  }

}
