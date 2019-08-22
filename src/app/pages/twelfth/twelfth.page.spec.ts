import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TwelfthPage } from './twelfth.page';

describe('TwelfthPage', () => {
  let component: TwelfthPage;
  let fixture: ComponentFixture<TwelfthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwelfthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwelfthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
