import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ChangeColorService } from 'src/app/services/change-color.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';
import { faSpinner } from '@fortawesome/free-solid-svg-icons/faSpinner';
@Component({
  selector: 'app-full-article',
  templateUrl: './full-article.component.html',
  styleUrls: ['./full-article.component.css']
})
export class FullArticleComponent implements OnInit {
  article: Article;
  isLoading: boolean;
  faSpinner = faSpinner;
  constructor(private route: ActivatedRoute, private articleService: ArticleService, private router: Router) { }

  ngOnInit() {
    this.isLoading = true;
    this.articleService.getArticleById(+this.route.snapshot.paramMap.get('id')).subscribe((data: Article) => {
      this.article = data;
      this.isLoading = false;
    });
  }
  redirectHome() {
    this.router.navigate(['/home']);
  }

}
