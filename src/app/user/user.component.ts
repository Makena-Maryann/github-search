import { Component, OnInit } from '@angular/core';
import { User } from '../user-class/user';
import { UserRequestService } from '../user-http/user-request.service';
import { RepoRequestService } from '../repo-http/repo-request.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;

  searchRepo() {
    this.repoService.getRepos();
  }

  constructor(
    private userService: UserRequestService,
    private repoService: RepoRequestService
  ) {}

  ngOnInit() {
    this.userService.getUsers;
    this.user = this.userService.user;
  }
}
