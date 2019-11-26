import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestComonentComponent } from './test-comonent.component';

describe('TestComonentComponent', () => {
  let component: TestComonentComponent;
  let fixture: ComponentFixture<TestComonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestComonentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
