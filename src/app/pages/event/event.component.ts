import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.scss'],
})
export class EventComponent implements OnInit {
  events: any = [];
  constructor(private eventService: EventService) {}
  ngOnInit(): void {
    this.eventService.getEvents().subscribe((events) => {
      this.events = events
    });
  }
}
