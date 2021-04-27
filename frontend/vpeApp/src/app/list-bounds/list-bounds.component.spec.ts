import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListBoundsComponent } from './list-bounds.component';

describe('ListBoundsComponent', () => {
  let component: ListBoundsComponent;
  let fixture: ComponentFixture<ListBoundsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListBoundsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListBoundsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
