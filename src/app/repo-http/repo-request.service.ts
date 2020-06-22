import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Repositories } from '../repo-class/repositories';

@Injectable({
  providedIn: 'root',
})
export class RepoRequestService {
  repo: Repositories;
  gitUrl = `https://api.github.com/users`;

  constructor(private http: HttpClient) {
    this.repo = new Repositories('', '', '');
  }

  getRepos(gitUser: string) {
    interface ApiResponse {
      name: string;
      description: string;
      html_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          `${this.gitUrl}/${gitUser}/repos?access_token=${environment.apiKey}`
        )
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
            this.repo.name = 'Oooops! No repo was found!';

            reject(error);
          }
        );
    });
    return promise;
  }
}
