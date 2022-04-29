import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "@ckeditor/ckeditor5-angular";
import { SharedModule } from "../../shared/shared.module";
import { PrimengModule } from "../../core/utils/primeng/primeng.module";
import { BackofficeRoutingModule } from "./backoffice-routing.module";
import { ActivitiesComponent } from "./activities/activities.component";
import { CategoriesComponent } from "./categories/categories.component";
import { EditOrganizationComponent } from "./edit-organization/edit-organization.component";
import { TableUsersComponent } from './components/table-users/table-users.component';
import { HomeEditComponent } from "./pages/home-edit/home-edit.component";
import { SlidesComponent } from "./pages/slides/slides.component";
import { UserListViewComponent } from './pages/user-list-view/user-list-view.component';
import { UserformComponent } from "./pages/userform/userform.component";
import { ActivitiesListComponent } from "./activities-list/activities-list.component";

@NgModule({
	declarations: [
		CategoriesComponent,
		ActivitiesComponent,
		SlidesComponent,
		HomeEditComponent,
		EditOrganizationComponent,
		UserListViewComponent,
		TableUsersComponent,
		UserformComponent,
		ActivitiesListComponent,
	],
	imports: [
		CommonModule,
		PrimengModule,
		SharedModule,
		ReactiveFormsModule,
		FormsModule,
		CKEditorModule,
		BackofficeRoutingModule,
	],
})
export class BackofficeModule {}