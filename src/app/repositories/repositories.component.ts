import { Component, OnInit } from '@angular/core';
import { Repositories } from '../repo-class/repositories';
import { RepoRequestService } from '../repo-http/repo-request.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.css'],
})
export class RepositoriesComponent implements OnInit {
  repos: Repositories;
  constructor(private repoService: RepoRequestService) {}

  ngOnInit() {
    this.repoService.getRepos();
    this.repos = this.repoService.repo;
  }
}
