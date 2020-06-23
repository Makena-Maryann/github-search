import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user-class/user';

@Injectable({
  providedIn: 'root',
})
export class UserRequestService {
  user: User;
  apiUrl = `https://api.github.com/users`;

  constructor(private http: HttpClient) {
    this.user = new User('', '', '');
  }

  getUsers(username: string) {
    interface ApiResponse {
      avatar_url: string;
      login: string;
      repos_url: string;
    }
    let promise = new Promise((resolve, reject) => {
      this.http
        .get<ApiResponse>(
          `${this.apiUrl}/${username}?access_token=${environment.apiKey}`
        )
        .toPromise()
        .then(
          (response) => {
            this.user.profilePhoto = response.avatar_url;
            this.user.userName = response.login;
            this.user.userRepos = response.repos_url;

            console.log(response);

            resolve();
          },
          (error) => {
            this.user.profilePhoto =
              'https://cdn.pixabay.com/photo/2013/07/12/13/16/alert-146730_960_720.png';
            this.user.userName = 'Oooops! User Not Found!';
            this.user.userRepos = '';

            reject(error);
          }
        );
    });
    return promise;
  }
}
