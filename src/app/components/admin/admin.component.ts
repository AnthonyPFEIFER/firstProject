import { Component, OnInit } from '@angular/core';
import { ArticleService } from 'src/app/services/article.service';
import { Article } from 'src/app/models/article';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  articles: Article[];
  isLoading: boolean;
  constructor(private articleService: ArticleService) { }

  ngOnInit() {
    this.isLoading = true;
    this.articleService.getAllArticles().subscribe((data: Article[]) => {
      this.articles = data;
      this.isLoading = false;
    })

    /*    this.articles = this.articleService.articles; */
  }
  deleteArticle(article: Article) {
    this.articles = this.articleService.deleteArticle(article);
  }
}
