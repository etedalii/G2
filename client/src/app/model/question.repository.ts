import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class QuestionRepository {
  private questions: Question[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadQuestions () : void{
    this.loaded = true;
    this.dataSource.getQuestions().subscribe(question => this.questions = question);
  }

  getQuestions(): Question[] {
    if(!this.loaded){
      this.loadQuestions();
    }
    return this.questions;
  }

  getQuestion(id: number): Question {
    return this.questions.find((p) => p._id === id) as Question;
  }

  saveQuestion(entity: Question): Observable<Question> {
    return this.dataSource.saveQuestion(entity);
  }

  updateQuestion(entity: Question): void {
    this.dataSource.updateQuestion(entity).subscribe(question => {
      this.questions.splice(this.questions.findIndex(o => o._id == question._id), 1, question);
    });
  }

  deleteQuestion(id : number): void{
    this.dataSource.deleteQuestion(id).subscribe(order => {
      this.questions.splice(this.questions.findIndex(o => id === o._id), 1)
    })
  }
}
