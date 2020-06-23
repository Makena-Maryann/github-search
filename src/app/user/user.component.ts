import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { UserRequestService } from '../user-http/user-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;
  repos: String[];

  constructor(private userService: UserRequestService) {}

  getRepoData() {
    this.userService.getRepos().subscribe((data) => {
      console.log(data);
      this.repos = data;
    });
  }

  ngOnInit() {
    this.userService.getUsers;
    this.user = this.userService.user;
  }
}
