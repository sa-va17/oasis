import { Component, OnInit } from '@angular/core';
import questionListType from 'src/types/questionListType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'oasis-frontend';
  questionList: questionListType[] = []

  constructor() { }

  addQuestionToList(value: any) {
    this.questionList.push(JSON.parse(JSON.stringify(value)))
  }

}

