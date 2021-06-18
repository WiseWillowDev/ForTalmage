import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TournmentTimeComponent } from './tournment-time.component';

describe('TournmentTimeComponent', () => {
  let component: TournmentTimeComponent;
  let fixture: ComponentFixture<TournmentTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TournmentTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TournmentTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
