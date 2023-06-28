import { ChangeDetectorRef, Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildCoreAsyncOnceInitComponent } from './child-core-async-once-init/child-core-async-once-init.component';
import { Observable, firstValueFrom, from, map, of } from 'rxjs';

@Component({
  selector: 'app-core-async-once-init-sample',
  standalone: true,
  imports: [CommonModule, ChildCoreAsyncOnceInitComponent],
  templateUrl: './core-async-once-init-sample.component.html',
  styleUrls: ['./core-async-once-init-sample.component.scss'],
})
export class CoreAsyncOnceInitSampleComponent implements OnInit {
  cd = inject(ChangeDetectorRef);
  count = 0;
  doHeavySomething = async (delayMs: number): Promise<void> => {
    return await new Promise((r) => setTimeout(r, delayMs));
  };

  countAsync$: Observable<number> = from(
    this.doHeavySomething(3000).then(() => 1)
  );

  async ngOnInit(): Promise<void> {
    await this.doHeavySomething(2000).then(() => {
      console.log('hello');
      this.count = 1;
      // this.cd.markForCheck();
    });
  }
}
