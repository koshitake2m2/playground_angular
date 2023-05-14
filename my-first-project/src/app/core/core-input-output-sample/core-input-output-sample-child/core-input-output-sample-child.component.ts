import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-core-input-output-sample-child',
  templateUrl: './core-input-output-sample-child.component.html',
  styleUrls: ['./core-input-output-sample-child.component.scss'],
})
export class CoreInputOutputSampleChildComponent {
  /**
   * count
   */
  @Input({ required: true })
  count = 0;

  // @Output: 子コンポーネントから親コンポーネントへイベントを渡す
  @Output()
  incrementCountByOutput = new EventEmitter();

  // @Input: 親コンポーネントから子コンポーネントへデータを渡す
  // NOTE: thisの扱いに注意が必要. 親で作ったメソッド内のthisは親を示す.
  @Input({ required: true })
  incrementCountByInput: (_: string) => void = () => {};

  /**
   * countState
   */
  // NOTE: @Inputでオブジェクトは参照渡しになる
  @Input({ required: true })
  countState = { state: 0 };

  @Output()
  incrementCountStateByOutput = new EventEmitter<never>();

  @Input({ required: true })
  incrementCountStateByInput: () => void = () => {};

  /**
   * multi args
   */
  @Output()
  logMultiMessage = new EventEmitter<{ a: string; b: string }>();
}
