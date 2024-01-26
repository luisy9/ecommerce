import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./user-module/user-module.module').then(module => module.UserModuleModule)
    },
    {
        path: 'register',
        loadChildren: () => import('./user-module/user-module.module').then(module => module.UserModuleModule)
    },
    {
        path: '',
        loadChildren: () => import('./article-module/article-module.module').then(module => module.ArticleModuleModule)
    },
    {
        path: '',
        loadChildren: () => import('./forms-module/forms-module.module').then(module => module.FormsModuleModule)
    },
    {
        path: '',
        loadChildren: () => import('./article-module/article-module.module').then(module => module.ArticleModuleModule)
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule { }