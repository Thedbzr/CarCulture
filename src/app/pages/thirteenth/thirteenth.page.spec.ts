import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirteenthPage } from './thirteenth.page';

describe('ThirteenthPage', () => {
  let component: ThirteenthPage;
  let fixture: ComponentFixture<ThirteenthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirteenthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirteenthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
