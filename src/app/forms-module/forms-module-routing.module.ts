import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticleNewTemplateComponent } from '../article-new-template/article-new-template.component';
import { ArticleNewReactiveComponent } from '../article-new-reactive/article-new-reactive.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'newArticleTemplate', component: ArticleNewTemplateComponent },
      { path: 'article/create', component: ArticleNewReactiveComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FormsModuleRoutingModule { }
