import { Component, OnInit } from '@angular/core';
import { userContent } from '../interfaces/content';

@Component({
  selector: 'app-manage-blogs',
  templateUrl: './manage-blogs.component.html',
  styleUrls: ['./manage-blogs.component.css']
})
export class ManageBlogsComponent implements OnInit {

  userBlog: userContent [];
  constructor() {
    this.userBlog=[];
   }

  ngOnInit(): void {
    const records = localStorage.getItem('userBlog')

    if(records!==null){
      this.userBlog = JSON.parse(records);
    }
  
  }

  deleteBlog(id:any){
    const oldRecords = localStorage.getItem('userBlog');
    if(confirm("Are you sure to delete? ")) {
    if(oldRecords !== null){
     const userBlog = JSON.parse(oldRecords);
     userBlog.splice(userBlog.findIndex( (a:any) => a.userId == id),1)
     localStorage.setItem('userBlog', JSON.stringify(userBlog))
    }
    const records = localStorage.getItem('userBlog')

    if(records!==null){
      this.userBlog = JSON.parse(records);
    }
  }
   }
}
