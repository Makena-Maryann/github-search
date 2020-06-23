import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repo-class/repositories';
import { RepoRequestService } from '../repo-http/repo-request.service';
import { UserRequestService } from '../user-http/user-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  repos: any;
  gitUser;

  constructor(
    private repoService: RepoRequestService,
    private userService: UserRequestService
  ) {
    this.repoService.getRepos(this.gitUser).subscribe((repos) => {
      console.log(repos);
      this.repos = repos;
    });
  }

  ngOnInit() {}
}
