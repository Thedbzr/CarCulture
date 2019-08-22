import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EleventhPage } from './eleventh.page';

describe('EleventhPage', () => {
  let component: EleventhPage;
  let fixture: ComponentFixture<EleventhPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EleventhPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EleventhPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
