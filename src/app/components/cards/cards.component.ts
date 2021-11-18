import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Character} from "../../models/Character";

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {

  @Input() data: Character[] = [];
  @Output() deleteChar: EventEmitter<number> = new EventEmitter<number>();
  @Output() changeChar: EventEmitter<Character> = new EventEmitter<Character>();

  constructor() { }

  ngOnInit(): void {
  }

  delete = (data: number) => {
    this.deleteChar.emit(data);
  }

  changeActive = (data: Character):void => {
    !data.active ? data.active = true : data.active = false;
    this.changeChar.emit(data);
  }
}
