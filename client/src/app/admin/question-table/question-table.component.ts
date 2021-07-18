import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/model/question.model';
import { QuestionRepository } from 'src/app/model/question.repository';

@Component({
  templateUrl: './question-table.component.html'
})
export class QuestionTableComponent implements OnInit {

  constructor(private router: Router, private repository: QuestionRepository) { }

  ngOnInit(): void {
  }

  getQuestions(): Question[]{
    return this.repository.getQuestions();
  }

  deleteQuestion(id: number): void {
    if (confirm('Are you sure?') && (id !== undefined)) {
      this.repository.deleteQuestion(id);
    } else {
      this.router.navigateByUrl('/admin/main/question');
    }
  }

  addQuestion():void{
    this.router.navigateByUrl('/admin/main/question/add')
  }

  editQuestion(id: number):void{
    this.router.navigateByUrl(`/admin/main/question/edit/${id}`)
  }
}
