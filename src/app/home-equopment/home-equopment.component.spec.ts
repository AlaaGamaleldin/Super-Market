import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEquopmentComponent } from './home-equopment.component';

describe('HomeEquopmentComponent', () => {
  let component: HomeEquopmentComponent;
  let fixture: ComponentFixture<HomeEquopmentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeEquopmentComponent]
    });
    fixture = TestBed.createComponent(HomeEquopmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
