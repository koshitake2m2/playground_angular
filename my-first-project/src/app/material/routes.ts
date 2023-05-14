import { Routes } from '@angular/router';
import { MaterialsSample001Component } from './materials-sample001/materials-sample001.component';
import { MaterialsDatepickerComponent } from './materials-datepicker/materials-datepicker.component';

const routes: Routes = [
  { path: '', component: MaterialsSample001Component },
  { path: 'datepicker', component: MaterialsDatepickerComponent },
];

export default routes;
