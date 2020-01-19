import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsdetailsComponent } from './bagsdetails.component';

describe('BagsdetailsComponent', () => {
  let component: BagsdetailsComponent;
  let fixture: ComponentFixture<BagsdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
