import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnagnorisisComponent } from './anagnorisis.component';

describe('AnagnorisisComponent', () => {
  let component: AnagnorisisComponent;
  let fixture: ComponentFixture<AnagnorisisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnagnorisisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnagnorisisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
