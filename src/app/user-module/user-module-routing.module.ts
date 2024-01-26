import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from '../login/login.component';
import { RegisterComponent } from '../register/register.component';
import { guardAccessLoginGuard } from '../guards/guard-access-login.guard';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: '', component: LoginComponent, canActivate: [guardAccessLoginGuard] },
      { path: 'register', component: RegisterComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserModuleRoutingModule { }
