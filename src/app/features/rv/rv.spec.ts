import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Rv } from './rv';

describe('Rv', () => {
  let component: Rv;
  let fixture: ComponentFixture<Rv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Rv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Rv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
