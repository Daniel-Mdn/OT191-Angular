import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { SharedModule } from "../../shared/shared.module";
import { MaterialModule } from "../../core/utils/material/material.module";
import { PrimengModule } from "../../core/utils/primeng/primeng.module";
import { BackofficeRoutingModule } from "./backoffice-routing.module";
import { CategoriesComponent } from "./pages/categories/categories.component";
import { EditOrganizationComponent } from "./components/edit-organization/edit-organization.component";
import { TableUsersComponent } from "./components/table-users/table-users.component";
import { HomeEditComponent } from "./pages/home-edit/home-edit.component";
import { ShowSlidesComponent } from "./pages/show-slides/show-slides.component";
import { SlidesComponent } from "./pages/slides/slides.component";
import { UserListViewComponent } from "./pages/user-list-view/user-list-view.component";
import { UserformComponent } from "./pages/userform/userform.component";
import { SlidesTableComponent } from "./components/slides-table/slides-table.component";
import { ActivitiesListComponent } from "./pages/activities-list/activities-list.component";
import { ActivitiesComponent } from "./pages/activities/activities.component";
import { HeaderComponent } from "./pages/header/header.component";
import { SidebarComponent } from "./pages/sidebar/sidebar.component";
import { BackofficeHomeComponent } from './pages/backoffice-home/backoffice-home.component';
import { ConfirmationService, MessageService } from "primeng/api";

@NgModule({
	declarations: [
		CategoriesComponent,
		ActivitiesComponent,
		SlidesComponent,
		HomeEditComponent,
		EditOrganizationComponent,
		ShowSlidesComponent,
		UserListViewComponent,
		TableUsersComponent,
		UserformComponent,
		ActivitiesListComponent,
		SlidesTableComponent,
		HeaderComponent,
		SidebarComponent,
  		BackofficeHomeComponent,
	],
	imports: [
		CommonModule,
		PrimengModule,
		MaterialModule,
		SharedModule,
		ReactiveFormsModule,
		FormsModule,
		CKEditorModule,
		BackofficeRoutingModule,
	],
	providers:[MessageService]
})
export class BackofficeModule {}
