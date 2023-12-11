import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteViewComponent } from './docente-view.component';

describe('DocenteViewComponent', () => {
  let component: DocenteViewComponent;
  let fixture: ComponentFixture<DocenteViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocenteViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocenteViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
