import { ChangeDetectorRef, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CoreInputOutputSampleChildComponent } from '../core-input-output-sample-child/core-input-output-sample-child.component';

@Component({
  selector: 'app-core-input-output-sample-parent',
  standalone: true,
  imports: [CommonModule, CoreInputOutputSampleChildComponent],
  templateUrl: './core-input-output-sample-parent.component.html',
  styleUrls: ['./core-input-output-sample-parent.component.scss'],
})
export class CoreInputOutputSampleParentComponent {
  constructor(private cd: ChangeDetectorRef) {}
  parentCount = 0;
  parentIncrementCount = (message: string) => {
    this.parentCount += 1;
    console.log('hello: ' + message);
  };

  parentCountState = { state: 0 };
  parentIncrementCountState = () => {
    this.parentCountState.state += 1;
    // this.cd.markForCheck();
  };
  parentLogMultiMessage = (args: { a: string; b: string }): void => {
    console.log(`message: a: ${args.a}, b: ${args.b}`);
  };
}
