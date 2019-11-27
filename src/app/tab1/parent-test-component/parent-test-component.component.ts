import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-test-component',
  templateUrl: './parent-test-component.component.html',
  styleUrls: ['./parent-test-component.component.scss'],
})
export class ParentComonentComponent implements OnInit {

  constructor() {}

  ngOnInit() {}

  displayCounter(count) {
    console.log(`Received ${count} from child component`);
  }

}
