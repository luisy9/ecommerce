import { Component, inject, OnInit } from '@angular/core';
import { Observable, Subscription, map } from 'rxjs';
import { ArticleServiceService } from '../services/articles/article-service.service';
import { OperationQuantity, UserIsLogged } from '../interfaces/interfaces';
import { UserStoreService } from '../services/user-store/user-store.service';

export interface Article {
  id: number;
  name: string;
  imageUrl: string;
  price: number;
  isOnSale: boolean;
  quantityInCart: number;
}

@Component({
  selector: 'app-article-list',
  templateUrl: './article-list.component.html',
  styleUrls: ['./article-list.component.css']
})

export class ArticleListComponent implements OnInit {
  public articles: Article[] = [];
  public articleChange$!: Observable<Article[]>;
  public articlesAll$!: Article[];
  public changeQuantity$!: Observable<number[]>;
  public subscription!: Subscription;
  public idArticle: number = 0;
  public articleId: [] = [];
  public isUserLogged$!: Observable<{isLogged: boolean; token: string}>;
  public articlesService = inject(ArticleServiceService);
  public userStoreService = inject(UserStoreService);

  constructor() { }

  public objectChild($event: OperationQuantity): void {
    this.articlesService.changeQuantityArticles($event);
  }

  ngOnInit(): void {
    //Aquí recibimos la informacion de el get de user-store.service.ts
    this.userStoreService.isLoggedUser();

    this.getArticlesAll();
    this.articlesService.refresh$.subscribe((e: number) => {
      this.idArticle = e;
      this.refreshDataQuantity();
    })
  }

  refreshDataQuantity(): void {
    this.getArticlesAll();
  }

  getArticlesAll() {
    this.articlesService.getArticle().subscribe((article: Article[]) => {
      this.articlesAll$ = article
    });
  }

  searchArticle($event: any) {
    const dataInput = $event.target.value.toLowerCase();
    this.articlesService.getArticle()
      .pipe(
        map(articles => articles.
          filter(article => article.name.toLowerCase()
            .includes(dataInput))
        ))
      .subscribe((article: Article[]) => {
        this.articlesAll$ = article;
      })
  }

}