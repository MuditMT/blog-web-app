import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateComponent } from './create/create.component';
import { ManageBlogsComponent } from './manage-blogs/manage-blogs.component';
import { UpdateBlogComponent } from './update-blog/update-blog.component';
import {ViewBlogComponent} from './view-blog/view-blog.component'
const routes: Routes = [ 
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'create',
    component:CreateComponent
  },
  {
    path:'manage-blogs',
    component: ManageBlogsComponent 
  },
  {
    path:'update-blog/:id',
    component: UpdateBlogComponent
  },
  {
    path:'view-blog/:id',
    component: ViewBlogComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
