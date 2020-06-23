import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class RepoRequestService {
  gitUrl = `https://api.github.com/users`;
  constructor(private http: HttpClient) {}

  getRepos(gitUser) {
    return this.http
      .get(`${this.gitUrl}/${gitUser}repos?access_token=${environment.apiKey}`)
      .pipe(map((res) => res));
  }
}
