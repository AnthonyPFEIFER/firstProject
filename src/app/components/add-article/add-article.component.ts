import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticleService } from 'src/app/services/article.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {
  articleForm: Article;
  constructor(private articleService: ArticleService, private router: Router, private toastrService: ToastrService) {

  }

  ngOnInit() {
    this.articleForm = new Article();
  }
  onSubmit(): void {
    /*     article.dateCreate = new Date(); */
    this.articleService.add(this.articleForm).subscribe(data => {
    });
    this.router.navigate(['/admin']);
  }

  returnHome() {
    this.router.navigate(['/home']);
  }
}
