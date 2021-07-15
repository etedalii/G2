import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SurveyFirstGuard } from './guards/surveyFirst.guard';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent, data: { title: 'Survey Home Page' } },
  { path: 'users', data: {title: 'Users List'} , redirectTo: '/admin/main', pathMatch: 'full' },

  { path: 'admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)},

  { path: '**', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers:[SurveyFirstGuard]
})
export class AppRoutingModule {}
