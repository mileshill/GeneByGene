/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AddsampleComponent } from './addsample.component';

describe('AddsampleComponent', () => {
  let component: AddsampleComponent;
  let fixture: ComponentFixture<AddsampleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddsampleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddsampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
