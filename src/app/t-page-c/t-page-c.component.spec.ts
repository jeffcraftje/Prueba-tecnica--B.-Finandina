import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TPageCComponent } from './t-page-c.component';

describe('TPageCComponent', () => {
  let component: TPageCComponent;
  let fixture: ComponentFixture<TPageCComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TPageCComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TPageCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
