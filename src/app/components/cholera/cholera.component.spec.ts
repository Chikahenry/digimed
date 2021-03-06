/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CholeraComponent } from './cholera.component';

describe('CholeraComponent', () => {
  let component: CholeraComponent;
  let fixture: ComponentFixture<CholeraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CholeraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CholeraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
