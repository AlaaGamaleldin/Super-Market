import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrossrayComponent } from './grossray.component';

describe('GrossrayComponent', () => {
  let component: GrossrayComponent;
  let fixture: ComponentFixture<GrossrayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GrossrayComponent]
    });
    fixture = TestBed.createComponent(GrossrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
