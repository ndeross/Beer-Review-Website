import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchContainerComponent } from './merch-container.component';

describe('MerchContainerComponent', () => {
  let component: MerchContainerComponent;
  let fixture: ComponentFixture<MerchContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
