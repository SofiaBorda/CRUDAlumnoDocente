import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Alumno } from './alumno';
import { GenericCrudService } from '../generic-crud.service';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService extends GenericCrudService<Alumno>{

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
