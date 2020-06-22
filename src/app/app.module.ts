import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchFormComponent } from './search-form/search-form.component';
import { RepositoriesComponent } from './repositories/repositories.component';

import { UserRequestService } from './user-http/user-request.service';
import { RepoRequestService } from './repo-http/repo-request.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    SearchFormComponent,
    RepositoriesComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UserRequestService, RepoRequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
