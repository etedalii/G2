import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { UserEditorComponent } from "./user-editor/user-editor.component";
import { UserTableComponent } from "./user-table/user-table.component";

const routing = RouterModule.forChild([
  {path: 'auth' , component: AuthComponent },
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'users/:mode/:id', component: UserEditorComponent, data: {title: 'Edit User'},canActivate: [AuthGuard] },
      {path: 'users/:mode', component: UserEditorComponent, data: {title: 'Add User'},canActivate: [AuthGuard]},
      {path: 'users', component: UserTableComponent, data: {title: 'User List'} ,canActivate: [AuthGuard]},
      { path: '**', redirectTo: 'home' },
    ],
  },
  {path : '**' , redirectTo: 'auth'}
]);

@NgModule({
    imports: [CommonModule, FormsModule , routing],
    providers: [AuthGuard],
    declarations:[AuthComponent, AdminComponent, UserEditorComponent, UserTableComponent]
})

export class AdminModule {}