import { Routes } from '@angular/router';
import { HomePageComponent } from './home/home-page/home-page.component';
import { HelloPageComponent } from './home/hello-page/hello-page.component';
import { TodoPageComponent } from './home/todo-page/todo-page.component';

export const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
  },
  {
    path: 'hello',
    component: HelloPageComponent,
  },
  {
    path: 'todos/:todoId',
    component: TodoPageComponent,
  },
];
