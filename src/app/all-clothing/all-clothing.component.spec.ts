import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AllClothingComponent } from './all-clothing.component';

describe('AllClothingComponent', () => {
  let component: AllClothingComponent;
  let fixture: ComponentFixture<AllClothingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllClothingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AllClothingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
