import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const url: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class EventService {
  constructor(private http: HttpClient) {}

  getEvents() {
    return this.http.get(`${url}events`);
  }
}
