import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { SpecialistComponent } from './specialist.component';
import { ViewComponent } from './view/view.component';


const routes: Routes = [
  {
    path: "",
    component: SpecialistComponent
  },
  {
    path: "view/:id",
    data: { breadcrumbs:"view"},
    component: ViewComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class SpecialistRoutingModule { }
