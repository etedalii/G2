import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'src/app/model/auth.service';
import { Question } from 'src/app/model/question.model';
import { QuestionRepository } from 'src/app/model/question.repository';
import { BasePageComponent } from 'src/app/partials/base-page/base-page.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends BasePageComponent implements OnInit {
  constructor(
    route: ActivatedRoute,
    private auth: AuthService,
    private router: Router,
    private repository: QuestionRepository
  ) {
    super(route);

    //return to login page if is not authenticat
    if (!auth.authenticated) {
      this.router.navigateByUrl('admin/auth');
    }
  }

  ngOnInit(): void {}

  getActiveQuestions(): Question[]{
    return this.repository.getActiveQuestions();
  }
}
