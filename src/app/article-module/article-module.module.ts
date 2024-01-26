import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ArticleModuleRoutingModule } from './article-module-routing.module';
import { ArticleListComponent } from '../article-list/article-list.component';
import { ArticleComponent } from '../article/article.component';
import { ValidImgPipePipe } from '../pipe/valid-img-pipe.pipe';


@NgModule({
  declarations: [ ArticleListComponent, ArticleComponent, ValidImgPipePipe ],
  imports: [
    CommonModule,
    ArticleModuleRoutingModule
  ]
})
export class ArticleModuleModule {
  constructor(){
    console.log('ArticleModuleModule');
  }
}
