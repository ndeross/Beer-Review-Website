import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchDetailsComponent } from './merch-details.component';

describe('MerchDetailsComponent', () => {
  let component: MerchDetailsComponent;
  let fixture: ComponentFixture<MerchDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
