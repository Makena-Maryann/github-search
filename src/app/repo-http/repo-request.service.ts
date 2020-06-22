import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserRequestService } from '../user-http/user-request.service';
import { Repositories } from '../repo-class/repositories';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RepoRequestService {
  repo: Repositories;
  repoUrl: string;

  constructor(
    private userRequestService: UserRequestService,
    private http: HttpClient
  ) {
    this.repo = new Repositories('', '', '');
  }

  getRepos() {
    let repoUrl = this.userRequestService.user.userRepos;

    interface GitApiResponse {
      name: string;
      description: string;
      html_url: string;
    }

    let repoPromise = new Promise((resolve, reject) => {
      this.http
        .get<GitApiResponse>(`${repoUrl}`)
        .toPromise()
        .then(
          (response) => {
            this.repo.description = response.description;
            this.repo.name = response.name;
            this.repo.url = response.html_url;
            console.log(response);

            resolve();
          },
          (error) => {
            this.repo.description = '';
            this.repo.name = 'No Repo Found';
            this.repo.url = '';

            reject(error);
          }
        );
    });
    return repoPromise;
  }
}
