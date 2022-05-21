/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YellowFeverComponent } from './yellow-fever.component';

describe('YellowFeverComponent', () => {
  let component: YellowFeverComponent;
  let fixture: ComponentFixture<YellowFeverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YellowFeverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YellowFeverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
