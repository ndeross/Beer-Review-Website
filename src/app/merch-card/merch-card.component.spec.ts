import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchCardComponent } from './merch-card.component';

describe('MerchCardComponent', () => {
  let component: MerchCardComponent;
  let fixture: ComponentFixture<MerchCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchCardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
