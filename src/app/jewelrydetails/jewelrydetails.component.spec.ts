import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewelrydetailsComponent } from './jewelrydetails.component';

describe('JewelrydetailsComponent', () => {
  let component: JewelrydetailsComponent;
  let fixture: ComponentFixture<JewelrydetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewelrydetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewelrydetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
