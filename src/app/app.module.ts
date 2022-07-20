import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { FormsModule,ReactiveFormsModule} from '@angular/forms';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import { ViewBlogComponent } from './view-blog/view-blog.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CreateComponent,
    ManageBlogsComponent,
    UpdateBlogComponent,
    ViewBlogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
