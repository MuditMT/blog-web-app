import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { userContent } from '../interfaces/content';
@Component({
  selector: 'app-update-blog',
  templateUrl: './update-blog.component.html',
  styleUrls: ['./update-blog.component.css']
})
export class UpdateBlogComponent implements OnInit {

  userContent: userContent;
  
  constructor(private route: ActivatedRoute, private router: Router) {
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
 

  editBlog(){
   const oldRecords = localStorage.getItem('userBlog');
   
   if(oldRecords !== null){
    const userBlog = JSON.parse(oldRecords);
    userBlog.splice(userBlog.findIndex( (a:any) => a.userId == this.userContent.userId),1)
    userBlog.push(this.userContent)
    localStorage.setItem('userBlog', JSON.stringify(userBlog))
   }
   alert('Your Blog Updated');
   this.router.navigateByUrl('/');
  }

  cancel(){
    this.router.navigateByUrl('/manage-blogs');
  }
}
