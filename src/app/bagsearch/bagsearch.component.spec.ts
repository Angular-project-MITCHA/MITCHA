import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BagsearchComponent } from './bagsearch.component';

describe('BagsearchComponent', () => {
  let component: BagsearchComponent;
  let fixture: ComponentFixture<BagsearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BagsearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BagsearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
