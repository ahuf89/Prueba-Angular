import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SindenavComponent } from './sindenav.component';

describe('SindenavComponent', () => {
  let component: SindenavComponent;
  let fixture: ComponentFixture<SindenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SindenavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SindenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
