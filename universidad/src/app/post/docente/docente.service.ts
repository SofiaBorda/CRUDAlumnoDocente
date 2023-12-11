import { Injectable } from '@angular/core';
import { GenericCrudService } from '../generic-crud.service';
import { Docente } from './docente';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DocenteService extends GenericCrudService<Docente>{

  public override apiURL = "http://localhost:8091/api"; 

  constructor(httpClient: HttpClient) {
    super(httpClient);
  }
}
