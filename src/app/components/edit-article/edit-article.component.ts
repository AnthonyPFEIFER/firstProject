import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css']
})

export class EditArticleComponent implements OnInit {
  articleForm: Article;
  isLoading: boolean;

  constructor(private articleService: ArticleService, private route: ActivatedRoute, private router: Router,
    private activatedRoute: ActivatedRoute, private toastr: ToastrService) { }

  ngOnInit() {
    this.isLoading = true;
    this.articleService.getArticleById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Article) => {
      this.articleForm = data;
      this.isLoading = false;
    });
  }

  onSubmit(): void {
    /*     article.dateCreate = new Date(); */
    this.articleService.edit(this.articleForm);
    this.router.navigate(['/admin']);
  }
  showSuccess() {
    this.toastr.success('Hello world!', 'Toastr fun!');
  }
}
