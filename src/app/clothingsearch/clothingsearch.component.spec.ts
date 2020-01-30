import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClothingsearchComponent } from './clothingsearch.component';

describe('ClothingsearchComponent', () => {
  let component: ClothingsearchComponent;
  let fixture: ComponentFixture<ClothingsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClothingsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClothingsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
