import { Component, OnInit } from '@angular/core';
import { Docente } from '../docente';
import { DocenteService } from '../docente.service';

@Component({
  selector: 'app-docente-index',
  templateUrl: './docente-index.component.html',
  styleUrl: './docente-index.component.css'
})
export class DocenteIndexComponent implements OnInit{
  docentes: Docente[] = [];

  constructor(public docenteService: DocenteService) {}

  ngOnInit(): void {
    this.docenteService.getAll('docentes').subscribe((data: Docente[]) => {
      this.docentes = data;
    });
  }

  deleteAlumno(id: number): void {
    this.docenteService.delete('docentes', id).subscribe(() => {
      this.docentes = this.docentes.filter((item) => item.id !== id);
    });
  }
}
