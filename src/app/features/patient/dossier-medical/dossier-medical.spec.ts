import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DossierMedical } from './dossier-medical';

describe('DossierMedical', () => {
  let component: DossierMedical;
  let fixture: ComponentFixture<DossierMedical>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DossierMedical]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DossierMedical);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
