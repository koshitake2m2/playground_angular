import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeIndexComponent } from './home/home-index/home-index.component';

const routes: Routes = [
  {
    path: 'hello-world',
    loadChildren: () => import('./hello-world/routes'),
  },
  {
    path: 'examples',
    loadChildren: () => import('./examples/routes'),
  },
  {
    path: 'core',
    loadChildren: () => import('./core/routes'),
  },
  {
    path: 'common',
    loadChildren: () => import('./common/routes'),
  },
  {
    path: 'material',
    loadChildren: () => import('./material/routes'),
  },
  {
    path: '',
    loadComponent: () => HomeIndexComponent,
  },
  // {
  //   path: '**',
  //   loadComponent: () => HomeIndexComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
