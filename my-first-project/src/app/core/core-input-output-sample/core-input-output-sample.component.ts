import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreInputOutputSampleParentComponent } from './core-input-output-sample-parent/core-input-output-sample-parent.component';

@Component({
  selector: 'app-core-input-output-sample',
  standalone: true,
  imports: [CommonModule, CoreInputOutputSampleParentComponent],
  templateUrl: './core-input-output-sample.component.html',
  styleUrls: ['./core-input-output-sample.component.scss'],
})
export class CoreInputOutputSampleComponent {}
