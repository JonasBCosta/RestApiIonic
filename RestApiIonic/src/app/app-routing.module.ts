import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'create-account', loadChildren: './create-account/create-account.module#CreateAccountPageModule' },
  { path: 'login', loadChildren: './login/login.module#LoginPageModule' },
  { path: 'user-list', loadChildren: './user-list/user-list.module#UserListPageModule' },
  { path: 'user-detail', loadChildren: './user-detail/user-detail.module#UserDetailPageModule' },
  { path: 'user-edit', loadChildren: './user-edit/user-edit.module#UserEditPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
