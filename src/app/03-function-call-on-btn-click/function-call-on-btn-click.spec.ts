import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FunctionCallOnBtnClick } from './function-call-on-btn-click';

describe('FunctionCallOnBtnClick', () => {
  let component: FunctionCallOnBtnClick;
  let fixture: ComponentFixture<FunctionCallOnBtnClick>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FunctionCallOnBtnClick]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FunctionCallOnBtnClick);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
