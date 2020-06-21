import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService {
  user: User;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '');
  }

  getUsers() {
    interface ApiResponse {
      avatar_url: string;
      login: string;
      repos_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          `https://api.github.com/users/daneden?access_token=${environment.apiKey}`
        )
        .toPromise()
        .then(
          (response) => {
            this.user.profilePhoto = response.avatar_url;
            this.user.userName = response.login;
            this.user.userRepos = response.repos_url;

            resolve();
          },
          (error) => {
            this.user.profilePhoto = '';
            this.user.userName = 'Makena-Maryann';
            this.user.userRepos = '';

            reject(error);
          }
        );
    });
    return promise;
  }
}
