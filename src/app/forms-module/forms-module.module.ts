import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleNewReactiveComponent } from '../article-new-reactive/article-new-reactive.component';
import { ArticleNewTemplateComponent } from '../article-new-template/article-new-template.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormsModuleRoutingModule } from './forms-module-routing.module';

@NgModule({
  declarations: [ArticleNewReactiveComponent, ArticleNewTemplateComponent],
  imports: [
    CommonModule,
    FormsModuleRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class FormsModuleModule { 
  constructor() {
    console.log('FormsModuleModule');
  }
}
