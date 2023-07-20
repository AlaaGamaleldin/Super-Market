import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrishFoodComponent } from './frish-food.component';

describe('FrishFoodComponent', () => {
  let component: FrishFoodComponent;
  let fixture: ComponentFixture<FrishFoodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FrishFoodComponent]
    });
    fixture = TestBed.createComponent(FrishFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
