import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JewerlysearchComponent } from './jewerlysearch.component';

describe('JewerlysearchComponent', () => {
  let component: JewerlysearchComponent;
  let fixture: ComponentFixture<JewerlysearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JewerlysearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JewerlysearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
