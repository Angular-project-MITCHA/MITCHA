import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingdetailsComponent } from './clothingdetails.component';

describe('ClothingdetailsComponent', () => {
  let component: ClothingdetailsComponent;
  let fixture: ComponentFixture<ClothingdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
