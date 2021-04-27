import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoundComponent } from './bound.component';

describe('BoundComponent', () => {
  let component: BoundComponent;
  let fixture: ComponentFixture<BoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
