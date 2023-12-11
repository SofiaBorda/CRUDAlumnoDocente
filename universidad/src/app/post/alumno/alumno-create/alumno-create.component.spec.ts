import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoCreateComponent } from './alumno-create.component';

describe('AlumnoCreateComponent', () => {
  let component: AlumnoCreateComponent;
  let fixture: ComponentFixture<AlumnoCreateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoCreateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnoCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
