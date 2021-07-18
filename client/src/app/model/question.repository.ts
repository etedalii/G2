import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from './question.model';
import { RestDataSource } from './rest.datasource';

@Injectable()
export class QuestionRepository {
  private questions: Question[] = [];
  private loaded = false;

  constructor(private dataSource: RestDataSource) {}

  loadQuestions(): void {
    this.loaded = true;
    this.dataSource.getQuestions().subscribe((question) => {
      this.questions = question;
    });
  }

  getQuestions(): Question[] {
    if (!this.loaded) {
      this.loadQuestions();
    }
    return this.questions;
  }

  getQuestion(id: number): Question {
    return this.questions.find((p) => p._id === id) as Question;
  }

  saveQuestion(question: Question): void{
    //return this.dataSource.saveQuestion(question);
    if (
      question._id === null ||
      question._id === 0 ||
      question._id === undefined
    ) {
      this.dataSource.addQuestion(question).subscribe((u) => {
        this.questions.push(question);
      });
    } else {
      this.dataSource.updateQuestion(question).subscribe((q) => {
        this.questions.splice(
          this.questions.findIndex((u) => u._id === question._id),
          1,
          question
        );
      });
    }
  }

  deleteQuestion(id: number): void {
    this.dataSource.deleteQuestion(id).subscribe((order) => {
      this.questions.splice(
        this.questions.findIndex((o) => id === o._id),
        1
      );
    });
  }
}
