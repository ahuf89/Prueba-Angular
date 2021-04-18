import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutcrmComponent } from './layoutcrm.component';

describe('LayoutcrmComponent', () => {
  let component: LayoutcrmComponent;
  let fixture: ComponentFixture<LayoutcrmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LayoutcrmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutcrmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
