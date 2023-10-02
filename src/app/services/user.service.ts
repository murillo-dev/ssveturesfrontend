import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../interface/user';

const url: string = 'http://localhost:3000/';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get(url + 'users');
  }

  getUser(id: number) {
    let urlUser = `${url}users/${id}`;
    return this.http.get(urlUser)
  }

  deleteUser(id : number) {
    let deleteUserUrl = `${url}users/${id}`; 
    return this.http.delete(deleteUserUrl);
  }

  addUser(user: Partial<{ name: string | null; email: string | null; }>) {
    let addUserUrl = `${url}users/`;
    const headers = new HttpHeaders().set("Content-type","application/json")
    console.log(user);
    return this.http.post(addUserUrl, user, {headers: headers})
  }
}
