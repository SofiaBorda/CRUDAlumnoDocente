import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../alumno.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-alumno-edit',
  templateUrl: './alumno-edit.component.html',
  styleUrl: './alumno-edit.component.css'
})
export class AlumnoEditComponent implements OnInit{
  id!:number;
  alumno!: Alumno;
  form!: FormGroup;
  
  constructor(public alumnoService: AlumnoService,
    private route: ActivatedRoute,
    private router: Router){

    }
    ngOnInit(): void {
      this.id = +this.route.snapshot.params['alumnoid'];
      this.alumnoService.find('alumnos', this.id).pipe(take(1)).subscribe(
        (data: Alumno) => {
          this.alumno = data;
          if (this.alumno) {
            this.form = new FormGroup({
              id: new FormControl(this.alumno.id, [Validators.required]),
              nombres: new FormControl(this.alumno.nombres, [Validators.required]),
              correo_electronico: new FormControl(this.alumno.correo_electronico, Validators.required)
            });
          } else {
            console.error('No se encontró el alumno con el ID:', this.id);
          }
        },
        (error) => {
          console.error('Error al obtener datos del alumno', error);
        }
      );
    }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.alumnoService.update('alumnos',this.id, this.form.value).subscribe(
      (res:any)=>{
        console.log('Alumno Actualizado exitosamente..!');
        this.router.navigateByUrl('alumnos');
      }
    )
  }
}
