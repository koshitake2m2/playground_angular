import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  Output,
  inject,
} from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  imports: [CommonModule],
  selector: 'app-core-input-output-sample-child',
  templateUrl: './core-input-output-sample-child.component.html',
  styleUrls: ['./core-input-output-sample-child.component.scss'],
})
export class CoreInputOutputSampleChildComponent {
  cd = inject(ChangeDetectorRef);
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

  // 親は変更を検知できない.
  // NOTE: アンチパターン. 子が親の状態を変更するんじゃない!
  incrementCountByChild(): void {
    this.count += 1;
    // 以下をしても親は変更を検知しない
    // this.cd.markForCheck();
  }

  /**
   * countState
   */
  // NOTE: @Inputでオブジェクトは参照渡しになる
  @Input({ required: true })
  countState = { state: 0 };
  get getCountState(): number {
    return this.countState.state;
  }

  @Output()
  incrementCountStateByOutput = new EventEmitter<never>();

  @Input({ required: true })
  incrementCountStateByInput: () => void = () => {};

  // 親は変更を検知できる??
  // NOTE: アンチパターン. 子が親の状態を変更するんじゃない! とはいえ, 状態管理の問題なので認知できればok
  incrementCountStateByChild(): void {
    this.countState.state += 1;
  }

  /**
   * multi args
   */
  @Output()
  logMultiMessage = new EventEmitter<{ a: string; b: string }>();
}
