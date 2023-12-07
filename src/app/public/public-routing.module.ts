import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PublicComponent } from './public.component';
import { PortalComponent } from './portal/portal.component';

const routes: Routes = [
  { 
    path: '', component: PublicComponent,
    children: [
      {
        path: "", 
        redirectTo:"home",
        pathMatch:"full"
      },
      {
        path: "home",
        data: { breadcrumbs:"Home"},
        component: PortalComponent
      },
      { path: "news", 
        data: { breadcrumbs:"News"},
        loadChildren: () => import("./news/news.module").then((m) => m.NewsModule) 
      },
      { path: "specialist", 
        data: { breadcrumbs:"Specialist"},
        loadChildren: () => import("./specialist/specialist.module").then((m) => m.SpecialistModule) 
      },
      { path: "service-unit", 
        data: { breadcrumbs:"Service Unit"},
        loadChildren: () => import("./service-unit/service-unit.module").then((m) => m.ServiceUnitModule) 
      },

    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PublicRoutingModule { }
