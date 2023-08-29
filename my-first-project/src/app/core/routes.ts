import { Routes } from '@angular/router';
import { CoreInputOutputSampleComponent } from './core-input-output-sample/core-input-output-sample.component';
import { SignalsSample1Component } from './signals-sample1/signals-sample1.component';
import { CoreAsyncOnceInitSampleComponent } from './core-async-once-init-sample/core-async-once-init-sample.component';
import { CoreControlValueAccessorSample001Component } from './core-control-value-accessor-sample001/core-control-value-accessor-sample001.component';

const routes: Routes = [
  { path: 'input-output-sample', component: CoreInputOutputSampleComponent },
  {
    path: 'aysnc-once-init-sample',
    component: CoreAsyncOnceInitSampleComponent,
  },
  { path: 'signals-sample1', component: SignalsSample1Component },
  {
    path: 'control-value-accessor-sample001',
    component: CoreControlValueAccessorSample001Component,
  },
];

export default routes;
