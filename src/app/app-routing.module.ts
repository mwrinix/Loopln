import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then(m => m.HomePage)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'feed',
    loadComponent: () => import('./feed/feed.page').then(m => m.FeedPage)
  },
  {
    path: 'feed/:id/:name',
    loadComponent: () => import('./feed/feed.page').then(m => m.FeedPage)
  },
  {
    path: 'api', // Se tiver uma página API
    loadComponent: () => import('./api/api.page').then(m => m.APIPage)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule],
})
export class AppRoutingModule {}