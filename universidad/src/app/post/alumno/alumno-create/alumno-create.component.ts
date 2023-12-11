import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AlumnoService } from '../alumno.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alumno-create',
  templateUrl: './alumno-create.component.html',
  styleUrls: ['./alumno-create.component.css']
})
export class AlumnoCreateComponent implements OnInit{
  form!: FormGroup;
  constructor(public alumnoService : AlumnoService,
    private router:Router){}
  ngOnInit(): void {
    this.form=new FormGroup({
      nombres: new FormControl('',[Validators.required]),
      correo_electronico: new FormControl('',Validators.required)
    }) 
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.alumnoService.create('alumnos/create',this.form.value).subscribe((
      red:any)=>{
        console.log('Alumno fue creado!');
        this.router.navigateByUrl('alumnos');
      })
  }
  
}