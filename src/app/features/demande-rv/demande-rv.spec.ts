import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandeRv } from './demande-rv';

describe('DemandeRv', () => {
  let component: DemandeRv;
  let fixture: ComponentFixture<DemandeRv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DemandeRv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DemandeRv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
