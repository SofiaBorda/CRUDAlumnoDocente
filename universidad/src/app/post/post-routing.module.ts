import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnoIndexComponent } from './alumno/alumno-index/alumno-index.component';
import { DocenteIndexComponent } from './docente/docente-index/docente-index.component';
import { AlumnoEditComponent } from './alumno/alumno-edit/alumno-edit.component';
import { AlumnoViewComponent } from './alumno/alumno-view/alumno-view.component';
import { DocenteViewComponent } from './docente/docente-view/docente-view.component';
import { DocenteEditComponent } from './docente/docente-edit/docente-edit.component';
import { AlumnoCreateComponent } from './alumno/alumno-create/alumno-create.component';
import { DocenteCreateComponent } from './docente/docente-create/docente-create.component';

const routes: Routes = [
  { path: 'alumnos', component: AlumnoIndexComponent },
  { path: 'alumnos/:alumnoid/edit', component: AlumnoEditComponent },
  { path: 'alumnos/:alumnoId/view', component: AlumnoViewComponent },
  { path: 'alumnos/create', component: AlumnoCreateComponent },

  { path: 'docentes', component: DocenteIndexComponent },
  { path: 'docentes/:docenteId/view', component: DocenteViewComponent },
  { path: 'docentes/:docenteId/edit', component: DocenteEditComponent },
  { path: 'docentes/create', component:DocenteCreateComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }
