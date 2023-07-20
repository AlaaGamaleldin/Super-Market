import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FroutsComponent } from './frouts.component';

describe('FroutsComponent', () => {
  let component: FroutsComponent;
  let fixture: ComponentFixture<FroutsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FroutsComponent]
    });
    fixture = TestBed.createComponent(FroutsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
