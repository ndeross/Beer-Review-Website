import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopTenTable } from './TopTenTable.component';

describe('TopTenTable', () => {
  let component: TopTenTable;
  let fixture: ComponentFixture<TopTenTable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TopTenTable],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopTenTable);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
