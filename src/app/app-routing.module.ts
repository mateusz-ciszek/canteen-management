import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { MenuListComponent } from './main/menu/list/menu-list.component';
import { CanActivateMainGuard } from './services/guard/can-activate-main.guard';
import { MenuListResolver } from './main/menu/list/menu-list-resolver';

const routes: Routes = [
  { path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  {
    path: 'main',
    children: [
      { path: '', redirectTo: 'menu', pathMatch: 'full' },
      {
        path: 'menu',
        children: [
          { path: '', redirectTo: 'list', pathMatch: 'full' },
          { path: 'list', component: MenuListComponent, resolve: { menus: MenuListResolver } },
          { path: '**', redirectTo: 'list', pathMatch: 'full' },
        ],
      },
      { path: '**', redirectTo: 'menu', pathMatch: 'full' },
    ],
    canActivate: [CanActivateMainGuard],
  },
  { path: '**', redirectTo: 'main', pathMatch: 'full' },
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule {}
