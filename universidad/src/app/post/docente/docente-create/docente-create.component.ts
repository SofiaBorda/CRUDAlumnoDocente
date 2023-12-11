import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocenteService } from '../docente.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-docente-create',
  templateUrl: './docente-create.component.html',
  styleUrl: './docente-create.component.css'
})
export class DocenteCreateComponent implements OnInit{
  form!: FormGroup;
  constructor(public docenteService : DocenteService,
    private router:Router){}
  ngOnInit(): void {
    this.form=new FormGroup({
      nombres: new FormControl('',[Validators.required]),
      celular: new FormControl('',Validators.required)
    }) 
  }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.docenteService.create('docentes/create',this.form.value).subscribe((
      red:any)=>{
        console.log('Docente fue creado!');
        alert('Docente fue creado!');
        this.router.navigateByUrl('docentes');
      })
  }
  
}