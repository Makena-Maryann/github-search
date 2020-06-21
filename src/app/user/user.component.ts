import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../user-class/user';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  user: User;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    interface ApiResponse {
      avatar_url: string;
      login: string;
    }
    this.http
      .get<ApiResponse>(
        'https://api.github.com/users/daneden?access_token=ec49c45418f454964473ce0359be455f2ef83590'
      )
      .subscribe((data) => {
        this.user = new User(data.avatar_url, data.login);
      });
  }
}
