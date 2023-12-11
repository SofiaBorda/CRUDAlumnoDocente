import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlumnoViewComponent } from './alumno-view.component';

describe('AlumnoViewComponent', () => {
  let component: AlumnoViewComponent;
  let fixture: ComponentFixture<AlumnoViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlumnoViewComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AlumnoViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
