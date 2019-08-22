import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TenthPage } from './tenth.page';

describe('TenthPage', () => {
  let component: TenthPage;
  let fixture: ComponentFixture<TenthPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TenthPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TenthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
