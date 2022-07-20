import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { userContent } from '../interfaces/content';
@Component({
  selector: 'app-view-blog',
  templateUrl: './view-blog.component.html',
  styleUrls: ['./view-blog.component.css']
})
export class ViewBlogComponent implements OnInit {

  userContent: userContent;

  constructor(private route: ActivatedRoute,private router: Router) {
    this.userContent = new userContent();
    this.route.params.subscribe((res) => {
      this.userContent.userId = res['id']
    })
   }

  ngOnInit(): void {

    const oldRecords = localStorage.getItem('userBlog')
    if(oldRecords !== null){
      const userBlog = JSON.parse(oldRecords);
      const currentUser = userBlog.find( (m:any) => m.userId == this.userContent.userId)
      if(currentUser !== undefined){
        this.userContent.userTitle = currentUser.userTitle;
        this.userContent.userDescription = currentUser.userDescription;
      }
    }
  }
 back(){
  this.router.navigateByUrl('/')
 }
}
