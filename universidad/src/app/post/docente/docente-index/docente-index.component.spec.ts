import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteIndexComponent } from './docente-index.component';

describe('DocenteIndexComponent', () => {
  let component: DocenteIndexComponent;
  let fixture: ComponentFixture<DocenteIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocenteIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocenteIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
