import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeventhPage } from './seventh.page';

describe('SeventhPage', () => {
  let component: SeventhPage;
  let fixture: ComponentFixture<SeventhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeventhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeventhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
