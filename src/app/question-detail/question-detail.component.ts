import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import questionListType from 'src/types/questionListType';

@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.scss']
})
export class QuestionDetailComponent implements OnInit {

  @Output() viewForm = new EventEmitter<questionListType>()
  @Input() questionDetail: questionListType = {
    title: "",
    type: "",
    options: [],
  }

  // questionDetail: questionListType = {
  //   title: "",
  //   type: "",
  //   options: [],
  // }

  newOption: string = "";
  isShow = true

  constructor() { }

  ngOnInit(): void {
    if (this.questionDetail.title.length > 0) {
      this.isShow = false;
    }

  }

  onSave() {
    this.viewForm.emit(this.questionDetail)
    console.log(this.questionDetail)
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

}
