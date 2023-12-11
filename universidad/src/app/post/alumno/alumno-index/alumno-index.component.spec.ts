import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoIndexComponent } from './alumno-index.component';

describe('AlumnoIndexComponent', () => {
  let component: AlumnoIndexComponent;
  let fixture: ComponentFixture<AlumnoIndexComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoIndexComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnoIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
