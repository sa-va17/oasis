import { Component, OnInit, Input } from '@angular/core';
import questionListType from 'src/types/questionListType';

@Component({
  selector: 'app-checklist',
  templateUrl: './checklist.component.html',
  styleUrls: ['./checklist.component.scss']
})
export class ChecklistComponent implements OnInit {

  @Input() question!: questionListType

  constructor() { }

  ngOnInit(): void {
  }

}
