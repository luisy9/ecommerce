// import { RouterModule, Routes } from '@angular/router';
// import { ArticleListComponent } from './article-list/article-list.component';
// import { ArticleNewTemplateComponent } from './article-new-template/article-new-template.component';
// import { ArticleNewReactiveComponent } from './article-new-reactive/article-new-reactive.component';
// import { LoginComponent } from './login/login.component';
// import { RegisterComponent } from './register/register.component';
// import { ArticleItemComponent } from './article-item/article-item.component';
// import { guardAccessGuard } from './guards/guard-access.guard';
// import { guardAccessLoginGuard } from './guards/guard-access-login.guard';


// export const routes: Routes = [
//     // {
//     //     path: 'article/list',
//     //     component: ArticleListComponent,
//     //     title: 'list',
//     // },
//     {
//         path: 'article/list',
//         loadChildren: () => import('./article-module/article-module.module').then(module => module.ArticleModuleModule)
//     },

//     {
//         path: 'register',
//         loadChildren: () => import('./user-module/user-module.module').then(module => module.UserModuleModule)
//     },

//     {
//         path: 'login',
//         loadChildren: () => import('./user-module/user-module.module').then(module => module.UserModuleModule)
//     },

//     {
//         path: 'newArticleTemplate',
//         component: ArticleNewTemplateComponent,
//         title: 'ArticleNewTemplate'
//     },

//     {
//         path: 'article/create',
//         component: ArticleNewReactiveComponent,
//         canActivate: [guardAccessGuard],
//         title: 'create'
//     },
//     // {
//     //     path: '',
//     //     component: LoginComponent,
//     //     canActivate: [guardAccessLoginGuard],
//     //     title: 'login'
//     // },
//     // {
//     //     path: 'register',
//     //     component: RegisterComponent,
//     //     title: 'register'
//     // },
//     {
//         path: 'article/:id',
//         component: ArticleItemComponent,
//         title: 'acrticledetail'
//     }
// ];

// export const routing = RouterModule.forRoot(routes);