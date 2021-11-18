import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Notifications} from "../../models/Notifications";

@Component({
  selector: 'app-notifications',
  templateUrl: './notifications.component.html',
  styleUrls: ['./notifications.component.scss']
})
export class NotificationsComponent implements OnInit {

  @Input() notifications: Notifications[] = [];
  @Output() closeNotif: EventEmitter<number> = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  close = (index: number) => {
    this.closeNotif.emit(index);
  }
}
