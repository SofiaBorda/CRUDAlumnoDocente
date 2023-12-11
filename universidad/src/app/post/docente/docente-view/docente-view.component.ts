import { Component, OnInit } from '@angular/core';
import { Docente } from '../docente';
import { DocenteService } from '../docente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-docente-view',
  templateUrl: './docente-view.component.html',
  styleUrl: './docente-view.component.css'
})
export class DocenteViewComponent implements OnInit{
  id!: number;
  docente!: Docente;

  constructor(
    public docenteService: DocenteService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.params['docenteId'];
    this.docenteService.find('docentes',this.id).subscribe((data: Docente | undefined) => {
      if (data) {
        this.docente = data;
      } else {
        console.error('La respuesta del servicio es undefined.');
      }
    });
  }
}
