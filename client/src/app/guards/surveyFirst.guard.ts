import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { QuestionTableComponent } from '../admin/question-table/question-table.component';

@Injectable()
export class SurveyFirstGuard {
  private firstNavigation = true;

  constructor(private router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean {
    if (this.firstNavigation) {
      this.firstNavigation = false;
      if (route.component !== QuestionTableComponent) {
        this.router.navigateByUrl('/');
        return false;
      }
    }
    return true;
  }
}
