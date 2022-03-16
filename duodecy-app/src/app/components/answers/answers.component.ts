import { Component, OnInit } from '@angular/core';
import { Answer } from 'src/app/models/Answer';
@Component({
  selector: 'app-answers',
  templateUrl: './answers.component.html',
  styleUrls: ['./answers.component.css']
})
export class AnswersComponent implements OnInit {

  answers: Answer[];

  constructor() { }

  ngOnInit(): void {
    this.answers = [
      {
        content: 'ANSWER 1',
        correct: false
      },
      {
        content: 'ANSWER 2',
        correct: false
      },
      {
        content: 'ANSWER 3',
        correct: true
      },
      {
        content: 'ANSWER 4',
        correct: false
      }
    ]
  }

}
