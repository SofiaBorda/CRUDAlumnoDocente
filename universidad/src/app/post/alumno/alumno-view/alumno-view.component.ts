import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-alumno-view',
  templateUrl: './alumno-view.component.html',
  styleUrl: './alumno-view.component.css'
})
export class AlumnoViewComponent implements OnInit{
  id!: number;
  alumno!: Alumno;

  constructor(
    public alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['alumnoId'];
    this.alumnoService.find('alumnos',this.id).subscribe((data: Alumno | undefined) => {
      if (data) {
        this.alumno = data;
      } else {
        console.error('La respuesta del servicio es undefined.');
      }
    });
  }
}
