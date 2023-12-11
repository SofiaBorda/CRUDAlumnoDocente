import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PostRoutingModule } from './post-routing.module';
import { AlumnoIndexComponent } from './alumno/alumno-index/alumno-index.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DocenteIndexComponent } from './docente/docente-index/docente-index.component';
import { AlumnoEditComponent } from './alumno/alumno-edit/alumno-edit.component';
import { AlumnoViewComponent } from './alumno/alumno-view/alumno-view.component';
import { DocenteViewComponent } from './docente/docente-view/docente-view.component';
import { DocenteEditComponent } from './docente/docente-edit/docente-edit.component';
import { AlumnoCreateComponent } from './alumno/alumno-create/alumno-create.component';
import { DocenteCreateComponent } from './docente/docente-create/docente-create.component';

@NgModule({
  declarations: [
    AlumnoIndexComponent,
    DocenteIndexComponent,
    AlumnoEditComponent,
    AlumnoViewComponent,
    DocenteViewComponent,
    DocenteEditComponent,
    AlumnoCreateComponent,
    DocenteCreateComponent,
  ],
  imports: [
    CommonModule,
    PostRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class PostModule { }
