import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatoApi } from './stato-api';

describe('StatoApi', () => {
  let component: StatoApi;
  let fixture: ComponentFixture<StatoApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StatoApi]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatoApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
