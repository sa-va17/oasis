import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import questionListType from 'src/types/questionListType';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  @Output() newQuestion = new EventEmitter<questionListType>()

  questionDetail: questionListType = {
    title: "",
    type: "",
    options: [],
  }

  newOption: string = "";
  showQuestionForm = false;

  constructor() { }

  ngOnInit(): void {
  }

  onSave() {
    this.newQuestion.emit(this.questionDetail)
    this.questionDetail.title = "";
    this.questionDetail.type = "";
    this.questionDetail.options = [];
    this.newOption = "";
  }

  addOption() {
    if (this.newOption.length > 0) {
      this.questionDetail.options.push(this.newOption)
      this.newOption = ""
    }
  }

  addQuestion() {
    this.showQuestionForm = true
  }
}
