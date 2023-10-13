import { Component } from '@angular/core';
import { NotificationService } from '../shared/notification.service';
import { animate, style, transition, trigger } from '@angular/animations';
import { NotificationData } from '../shared/notification-data.model';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css'],
  animations: [
    trigger('notificationAnimation', [
      transition(':enter', [
        style({
          opacity: 0,
          transform: 'translateY(5px)'
        }),
        animate(250)
      ]),
      transition(':leave', [
        animate(250, style({
          opacity: 0,
          transform: 'scale(0.85)'
        }))
      ])
    ])
  ]
})
export class NotificationComponent {

  notification: NotificationData[] = [];
  timeOut: any;

  constructor(private _NotificationService: NotificationService) { }

  ngOnInit(): void {

    this._NotificationService.getNotification().subscribe((notify: NotificationData) => {
      this.notification = Array(notify);

      clearTimeout(this.timeOut);

      this.timeOut = setTimeout(() => {
        this.notification = null;
      }, notify.duration)

    })

  }

}
