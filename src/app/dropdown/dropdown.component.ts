import { Component, Input, OnInit } from '@angular/core';
import questionListType from 'src/types/questionListType';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent implements OnInit {

  @Input() question!: questionListType

  constructor(){}
  ngOnInit(): void {
   
  }

}


