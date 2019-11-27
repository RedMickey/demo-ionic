import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ParentComonentComponent } from './parent-test-component.component';

describe('TestComonentComponent', () => {
  let component: ParentComonentComponent;
  let fixture: ComponentFixture<ParentComonentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ParentComonentComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ParentComonentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
