import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Datatype } from './datatype';

describe('Datatype', () => {
  let component: Datatype;
  let fixture: ComponentFixture<Datatype>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Datatype]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Datatype);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
