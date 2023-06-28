import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-child-core-async-once-init',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child-core-async-once-init.component.html',
  styleUrls: ['./child-core-async-once-init.component.scss'],
})
export class ChildCoreAsyncOnceInitComponent implements OnInit, OnChanges {
  /**
   * 非同期で一度だけ更新したい変数たち.
   * 親コンポーネントから非同期で `@Input` でデータを渡されたとき, 一度だけ更新する.
   */
  onceInitSample1: string | undefined;
  onceInitSample2: string | undefined;
  onceInitSample3: string | undefined;

  ngOnInit() {
    console.log('child init');
  }

  private _count = 0;

  @Input()
  set count(value: number) {
    console.log('@Input', value);
    if (value === 1 && !this.onceInitSample1) {
      this.onceInitSample1 = 'init done 1';
    }
    this._count = value;
  }

  get count(): number {
    return this._count;
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges', changes);
    if (changes['count']?.currentValue === 1) {
      this.onceInitSample2 = 'init done 2';
    }
  }

  @Input()
  set countAsync(value: number | null) {
    console.log('countAsync', value);
    if (value === 1 && !this.onceInitSample3) {
      this.onceInitSample3 = 'init done 3';
    }
  }
}
