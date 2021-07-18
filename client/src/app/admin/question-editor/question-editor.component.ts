import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { QuestionRepository } from 'src/app/model/question.repository';

@Component({
  selector: 'app-question-editor',
  templateUrl: './question-editor.component.html'
})
export class QuestionEditorComponent implements OnInit {
  editing = false;
  question: Question = new Question();

  constructor(private repository: QuestionRepository,
              private router: Router, 
              activateRoute: ActivatedRoute) 
  { 
    this.editing = activateRoute.snapshot.params.mode === 'edit';
    if (this.editing) {
      Object.assign(
        this.question,
        repository.getQuestion(activateRoute.snapshot.params.id)
      );
    }
  }

  ngOnInit(): void {
  }

  save(form: NgForm):void{
    this.repository.saveQuestion(this.question);
    this.router.navigateByUrl('/admin/main/question')
  }
}
