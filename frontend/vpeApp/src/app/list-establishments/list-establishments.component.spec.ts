import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListEstablishmentsComponent } from './list-establishments.component';

describe('ListEstablishmentsComponent', () => {
  let component: ListEstablishmentsComponent;
  let fixture: ComponentFixture<ListEstablishmentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListEstablishmentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEstablishmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
