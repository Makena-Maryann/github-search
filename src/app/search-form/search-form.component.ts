import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../user-http/user-request.service';
import { RepoRequestService } from '../repo-http/repo-request.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  gitHubUserName: string;

  searchUser() {
    this.userNameService.getUsers(this.gitHubUserName);
    this.repoService.getRepos(this.gitHubUserName);
  }

  constructor(
    private userNameService: UserRequestService,
    private repoService: RepoRequestService
  ) {}

  ngOnInit(): void {}
}
