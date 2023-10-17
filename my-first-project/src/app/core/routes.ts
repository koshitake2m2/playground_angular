import { Routes } from '@angular/router';
import { CoreInputOutputSampleComponent } from './core-input-output-sample/core-input-output-sample.component';
import { SignalsSample1Component } from './signals-sample1/signals-sample1.component';
import { CoreAsyncOnceInitSampleComponent } from './core-async-once-init-sample/core-async-once-init-sample.component';
import { CoreControlValueAccessorSample001Component } from './core-control-value-accessor-sample001/core-control-value-accessor-sample001.component';
import { NestingRoutesExamples001Component } from './nesting-routes-examples001/nesting-routes-examples001.component';
import { ChildAComponent } from './nesting-routes-examples001/child-a/child-a.component';
import { NestingRoutesExamples002Component } from './nesting-routes-examples002/nesting-routes-examples002.component';
import { Child002AComponent } from './nesting-routes-examples002/child002-a/child002-a.component';
import { Child003AComponent } from './nesting-routes-examples003/child003-a/child003-a.component';

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
  {
    // with <router-outlet/>
    path: 'nesting-routes-examples001',
    // you can see this component
    component: NestingRoutesExamples001Component,
    children: [
      {
        path: 'child-a',
        // you can see this component
        component: ChildAComponent,
      },
    ],
  },
  {
    // without <router-outlet/>
    path: 'nesting-routes-examples002',
    // you can see this component
    component: NestingRoutesExamples002Component,
    children: [
      {
        path: 'child002-a',
        // you can not see this component
        component: Child002AComponent,
      },
    ],
  },
  {
    // without <router-outlet/>
    path: 'nesting-routes-examples003',
    children: [
      {
        path: 'child003-a',
        // you can see this component
        component: Child003AComponent,
      },
    ],
  },
];

export default routes;
