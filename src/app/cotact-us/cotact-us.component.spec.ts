import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CotactUsComponent } from './cotact-us.component';

describe('CotactUsComponent', () => {
  let component: CotactUsComponent;
  let fixture: ComponentFixture<CotactUsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CotactUsComponent]
    });
    fixture = TestBed.createComponent(CotactUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
