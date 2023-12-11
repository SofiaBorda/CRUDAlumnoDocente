import { Component, OnInit } from '@angular/core';
import { Docente } from '../docente';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DocenteService } from '../docente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { take } from 'rxjs';

@Component({
  selector: 'app-docente-edit',
  templateUrl: './docente-edit.component.html',
  styleUrls: ['./docente-edit.component.css']
})
export class DocenteEditComponent implements OnInit{
  id!:number;
  docente!: Docente;
  form!: FormGroup;
  
  constructor(public docenteService: DocenteService,
    private route: ActivatedRoute,
    private router: Router){

    }
    ngOnInit(): void {
      this.id = +this.route.snapshot.params['docenteId'];
      this.docenteService.find('docentes', this.id).pipe(take(1)).subscribe(
        (data: Docente) => {
          this.docente = data;
          if (this.docente) {
            this.form = new FormGroup({
              id: new FormControl(this.docente.id, [Validators.required]),
              nombres: new FormControl(this.docente.nombres, [Validators.required]),
              celular: new FormControl(this.docente.celular, Validators.required)
            });
          } else {
            console.error('No se encontró el docente con el ID:', this.id);
          }
        },
        (error) => {
          console.error('Error al obtener datos del docente', error);
        }
      );
    }
  get f(){
    return this.form.controls;
  }
  submit(){
    console.log(this.form.value);
    this.docenteService.update('docentes',this.id, this.form.value).subscribe(
      (res:any)=>{
        console.log('Docente Actualizado exitosamente..!');
        this.router.navigateByUrl('docentes');
      }
    )
  }
}
