/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TyphoidComponent } from './typhoid.component';

describe('TyphoidComponent', () => {
  let component: TyphoidComponent;
  let fixture: ComponentFixture<TyphoidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TyphoidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TyphoidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
