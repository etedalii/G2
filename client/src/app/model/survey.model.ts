import { Injectable } from '@angular/core';

import { Question } from './question.model';

@Injectable()
export class Survey {
  public lines: SurveyLine[] = [];
  public questionCount = 0;
  public questionOrder = 0;

  addLine(question: Question): void {
    const line = this.lines.find((l) => l.question._id === question._id);
    if (line !== undefined) {
      //line.questionCount += questionCount;
    } else {
      this.lines.push(new SurveyLine(question));
    }
    this.recalculate();
  }

  updateQuantity(question: Question, quantity: number): void {
    const line = this.lines.find((l) => l.question._id === question._id);
    if (line !== undefined) {
    //  line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number): void {
    const index = this.lines.findIndex((l) => l.question._id === id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear(): void {
    this.lines = [];
    this.questionCount = 0;
    this.questionOrder = 0;
  }

  recalculate(): void {
    this.questionCount = 0;
    this.questionOrder = 0;
    // this.lines.forEach((l) => {
    //   this.questionCount += l.quantity;
    //   this.questionOrder += l.quantity * (l.book.price ?? 0);
    // });
  }
}

export class SurveyLine {
  constructor(public question: Question) {}
}
