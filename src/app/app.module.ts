import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { SearchFormComponent } from './search-form/search-form.component';

import { UserRequestService } from './user-http/user-request.service';
import { RepositoriesComponent } from './repositories/repositories.component';
@NgModule({
  declarations: [AppComponent, UserComponent, SearchFormComponent, RepositoriesComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [UserRequestService],
  bootstrap: [AppComponent],
})
export class AppModule {}
