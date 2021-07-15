import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { RestDataSource } from "../model/rest.datasource";
import { UserRepository } from "../model/user.repository";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth/auth.component";
import { UserEditorComponent } from "./user-editor/user-editor.component";
import { UserTableComponent } from "./user-table/user-table.component";

const routing = RouterModule.forChild([
  {path: 'auth' , component: AuthComponent },
  {
    path: 'main',
    component: AdminComponent,
    children: [
      {path: 'users/:mode/:id', component: UserEditorComponent, data: {title: 'Edit User'} },
      {path: 'users/:mode', component: UserEditorComponent, data: {title: 'Add User'}},
      {path: 'users', component: UserTableComponent, data: {title: 'User List'} },
      { path: '**', redirectTo: '/' },
    ],
  },
  {path : '**' , redirectTo: 'auth'}
]);

@NgModule({
    imports: [CommonModule, FormsModule , routing],
    providers: [],
    declarations:[AuthComponent, AdminComponent, UserEditorComponent, UserTableComponent]
})

export class AdminModule {}