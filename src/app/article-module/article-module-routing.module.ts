import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleItemComponent } from '../article-item/article-item.component';
import { ArticleComponent } from '../article/article.component';

const routes: Routes = [
  {
    path: 'article/list',
    component: ArticleListComponent
  },
  {
    path: 'article/:id',
    component: ArticleItemComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ArticleModuleRoutingModule { }
