import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDemande } from './form-demande';

describe('FormDemande', () => {
  let component: FormDemande;
  let fixture: ComponentFixture<FormDemande>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormDemande]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormDemande);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
