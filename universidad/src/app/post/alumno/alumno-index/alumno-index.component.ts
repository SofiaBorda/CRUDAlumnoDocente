import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';

@Component({
  selector: 'app-alumno-index',
  templateUrl: './alumno-index.component.html',
  styleUrl: './alumno-index.component.css'
})
export class AlumnoIndexComponent implements OnInit{
  alumnos: Alumno[] = [];

  constructor(public alumnoService: AlumnoService) {}

  ngOnInit(): void {
    this.alumnoService.getAll('alumnos').subscribe((data: Alumno[]) => {
      this.alumnos = data;
    });
  }

  deleteAlumno(id: number): void {
    this.alumnoService.delete('alumnos', id).subscribe(() => {
      this.alumnos = this.alumnos.filter((item) => item.id !== id);
    });
  }
}
