import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDemande } from './list-demande';

describe('ListDemande', () => {
  let component: ListDemande;
  let fixture: ComponentFixture<ListDemande>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDemande]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListDemande);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
