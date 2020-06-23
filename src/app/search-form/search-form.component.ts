import { Component, OnInit } from '@angular/core';
import { UserRequestService } from '../user-http/user-request.service';

@Component({
  selector: 'app-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css'],
})
export class SearchFormComponent implements OnInit {
  gitHubUserName: string;

  searchUser() {
    this.userNameService.getUsers(this.gitHubUserName);
  }

  constructor(private userNameService: UserRequestService) {}

  ngOnInit() {
    this.userNameService.getUsers('Makena-Maryann');
  }
}
