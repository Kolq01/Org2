import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Org2Component } from './org2.component';

describe('Org2Component', () => {
  let component: Org2Component;
  let fixture: ComponentFixture<Org2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Org2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Org2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
