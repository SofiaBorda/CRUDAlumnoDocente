import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DocenteCreateComponent } from './docente-create.component';

describe('DocenteCreateComponent', () => {
  let component: DocenteCreateComponent;
  let fixture: ComponentFixture<DocenteCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DocenteCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DocenteCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
