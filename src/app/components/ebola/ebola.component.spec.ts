/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EbolaComponent } from './ebola.component';

describe('EbolaComponent', () => {
  let component: EbolaComponent;
  let fixture: ComponentFixture<EbolaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbolaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbolaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
