import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ChangeColorService } from 'src/app/services/change-color.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  @Input() article: Article;
  @Output() voteEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
  articles: Article;
  constructor(private changerCouleurs: ChangeColorService) { }
  bgColor: string;
  ngOnInit() {
    setInterval(() => {
      this.bgColor = this.changerCouleurs.changerCouleurs();
    }, 500000);
  }
  vote() {
    this.voteEmitter.emit(true);
  }
}
