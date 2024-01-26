import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavbarComponent } from './navbar/navbar.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
// import { ValidImgPipePipe } from './pipe/valid-img-pipe.pipe';
import { ArticleItemComponent } from './article-item/article-item.component';
import { AppRoutingModule } from './app.routing.module';



@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule ,BrowserAnimationsModule, MatIconModule, MatButtonModule, HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }

