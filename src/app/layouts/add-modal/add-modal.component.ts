import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Character} from "../../models/Character";

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.component.html',
  styleUrls: ['./add-modal.component.scss']
})
export class AddModalComponent implements OnInit {
  @Output() addCharacter: EventEmitter<string> = new EventEmitter<string>();

  isActive: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  activeModal = (): void => {
    !this.isActive ? this.isActive = true : this.isActive = false;
  }

  add = (data: string): void => {
    this.addCharacter.emit(data);
  }
}
