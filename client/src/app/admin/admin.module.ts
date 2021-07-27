import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { AuthComponent } from "./auth/auth.component";
import { AuthGuard } from "./auth/auth.guard";
import { UserEditorComponent } from "./user-editor/user-editor.component";
import { UserTableComponent } from "./user-table/user-table.component";
import { QuestionTableComponent } from './question-table/question-table.component';
import { QuestionEditorComponent } from './question-editor/question-editor.component';
import { SignupComponent } from './signup/signup.component';

const routing = RouterModule.forChild([
  {path: 'auth' , component: AuthComponent },
  {path: 'signup', component: SignupComponent, data: {title: 'Create an Account'}},
  {
    path: 'main',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {path: 'users/:mode/:id', component: UserEditorComponent, data: {title: 'Edit User'},canActivate: [AuthGuard] },
      {path: 'users/:mode', component: UserEditorComponent, data: {title: 'Add User'},canActivate: [AuthGuard]},
      {path: 'users', component: UserTableComponent, data: {title: 'User List'} ,canActivate: [AuthGuard]},
      
      {path: 'question/:mode/:id', component: QuestionEditorComponent, data: {title: 'Edit Question'},canActivate: [AuthGuard] },
      {path: 'question/:mode', component: QuestionEditorComponent, data: {title: 'Add Question'},canActivate: [AuthGuard]},
      {path: 'question', component: QuestionTableComponent, data: {title: 'Question List'} ,canActivate: [AuthGuard]},
      { path: '**', redirectTo: 'home' },
    ],
  },
  {path : '**' , redirectTo: 'auth'}
]);

@NgModule({
    imports: [CommonModule, FormsModule , routing],
    providers: [AuthGuard],
    declarations:[AuthComponent, AdminComponent, UserEditorComponent, UserTableComponent, QuestionTableComponent, QuestionEditorComponent, SignupComponent]
})

export class AdminModule {}