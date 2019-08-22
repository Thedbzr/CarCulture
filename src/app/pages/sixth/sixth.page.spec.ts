import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthPage } from './sixth.page';

describe('SixthPage', () => {
  let component: SixthPage;
  let fixture: ComponentFixture<SixthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
