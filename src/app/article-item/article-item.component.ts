import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleServiceService } from '../services/articles/article-service.service';
import { Article } from '../interfaces/interfaces';

@Component({
  selector: 'app-article-item',
  templateUrl: './article-item.component.html',
  styleUrl: './article-item.component.css'
})
export class ArticleItemComponent implements OnInit{
  constructor(private _route: ActivatedRoute){}

  public idArticle!: string;
  public articles$!: Article;
  public serviceArticle = inject(ArticleServiceService);

  ngOnInit(): void {
    this.idArticle = this._route.snapshot.paramMap.get('id')!;
    this.serviceArticle.getArticleWithId(this.idArticle).subscribe((article: Article) => {
      this.articles$ = article;
    })
  }
}
