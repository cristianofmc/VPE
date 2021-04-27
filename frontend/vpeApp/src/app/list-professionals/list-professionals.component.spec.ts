import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListProfessionalsComponent } from './list-professionals.component';

describe('ListProfessionalsComponent', () => {
  let component: ListProfessionalsComponent;
  let fixture: ComponentFixture<ListProfessionalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListProfessionalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListProfessionalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
