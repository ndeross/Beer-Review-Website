import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MerchPageComponent } from './merch-page.component';

describe('MerchPageComponent', () => {
  let component: MerchPageComponent;
  let fixture: ComponentFixture<MerchPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MerchPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MerchPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
