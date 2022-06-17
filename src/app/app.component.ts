import { Component, OnInit } from '@angular/core';
import questionListType from 'src/types/questionListType';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent {
  title = 'oasis-frontend';
  questionList: questionListType[] = [];
  // questionList: questionListType[] = [{
  //   title: "DropDown Checking.",
  //   type: "dropdown",
  //   options: [
  //     "Yes",
  //     "No"
  //   ]
  // },
  // {
  //   title: "CheckList Checking",
  //   type: "checklist",
  //   options: [
  //     "Ok",
  //     "Better",
  //   ]
  // }
  // ]
  viewSavedForm = false;

  constructor() { }

  addQuestionToList(value: any) {
    this.questionList.push(JSON.parse(JSON.stringify(value)))
  }

  viewForm() {
    this.viewSavedForm = true;

  }

}

