import { Routes } from '@angular/router';
import { LoginFormComponent } from './examples001/login-form/login-form.component';
import { LoggedinHomeComponent } from './examples001/loggedin-home/loggedin-home.component';

const routes: Routes = [
  { path: 'examples001/login-form', component: LoginFormComponent },
  { path: 'examples001/loggedin-home', component: LoggedinHomeComponent },
];

export default routes;
