import { Routes } from '@angular/router';
import { CoreInputOutputSampleComponent } from './core-input-output-sample/core-input-output-sample.component';
import { SignalsSample1Component } from './signals-sample1/signals-sample1.component';

const routes: Routes = [
  { path: 'input-output-sample', component: CoreInputOutputSampleComponent },
  { path: 'signals-sample1', component: SignalsSample1Component },
];

export default routes;
