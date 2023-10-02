import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/interface/user';
import { UserService } from 'src/app/services/user.service';

import { MatDialog} from '@angular/material/dialog';
import { UserNewComponent } from './component/user-new/user-new.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  users: User[] = [];
  constructor(private userService: UserService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
    });
  }

  deleteUser(id: number ) {
    this.userService.deleteUser(id).subscribe(() => {
      this.users = [...this.users.filter((user) => user.id !== id)];
    });
  }

  newUser() {
    this.dialog.open(UserNewComponent, { width: '500px' });
  }
}
