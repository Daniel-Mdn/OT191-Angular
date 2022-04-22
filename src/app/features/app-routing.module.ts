import { RouterModule, Routes } from "@angular/router";
import { SlidesComponent } from "./backoffice/pages/slides/slides.component";
import { HomeComponent } from "./public/pages/home/home.component";
import { FormcontactComponent } from "./public/formcontact/formcontact.component";
import { ActivityFormComponent } from "./pages/activities/activity-form/activity-form.component";
import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { EditOrganizationComponent } from "./backoffice/edit-organization/edit-organization.component";

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule)
  },
  {
    path: "backoffice/slides",
    component: SlidesComponent,
  },
  {
    path: "backoffice/organization/edit",
    component: EditOrganizationComponent,
  },
  {
    path: 'backoffice',
    loadChildren: () => import('./backoffice/backoffice.module').then(m => m.BackofficeModule)
  },
  {
    path: "actividades",
    component: ActivityFormComponent,
  },
  {
    path: "",
    component: HomeComponent,
  },
  {
    path: "public/contact",
    component: FormcontactComponent,
  },
  {
    path: "**",
    redirectTo: "",
    pathMatch: "full",
  },
  
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
})
export class AppRoutingModule {}
