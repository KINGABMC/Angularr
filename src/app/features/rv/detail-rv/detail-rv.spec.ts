import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailRv } from './detail-rv';

describe('DetailRv', () => {
  let component: DetailRv;
  let fixture: ComponentFixture<DetailRv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailRv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailRv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
