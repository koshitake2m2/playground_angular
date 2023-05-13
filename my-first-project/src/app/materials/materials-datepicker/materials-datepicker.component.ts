import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_NATIVE_DATE_FORMATS,
  // MAT_NATIVE_DATE_FORMATS,
  MatDateFormats,
  NativeDateAdapter,
} from '@angular/material/core';
import * as dayjs from 'dayjs';

import * as customParseFormat from 'dayjs/plugin/customParseFormat';
// dayjs.extend(customParseFormat);

const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'YYYY/MM/DD',
    // dateInput: null,
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthLabel: undefined,
    monthYearLabel: 'M/YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'M/YYYY',
  },
};

class MyDateAdapter extends NativeDateAdapter {
  override getDateNames(): string[] {
    return super.getDateNames().map((dateNames) => dateNames.replace('日', ''));
  }
  override parse(value: any, parseFormat?: any): Date | null {
    const day = dayjs(value, parseFormat);
    return day.isValid() ? day.toDate() : null;
  }
  override format(date: Date, displayFormat: string): string {
    return dayjs(date).format(displayFormat);
  }
}

@Component({
  selector: 'app-materials-datepicker',
  standalone: true,
  imports: [
    CommonModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
  ],
  providers: [
    {
      provide: MAT_DATE_LOCALE,
      // useValue: 'ja-JP',
      useValue: 'en-US',
    },
    {
      provide: DateAdapter,
      // useClass: NativeDateAdapter,
      useClass: MyDateAdapter,
      deps: [MAT_DATE_LOCALE],
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_DATE_FORMATS,
      // useValue: MAT_NATIVE_DATE_FORMATS,
    },
  ],
  templateUrl: './materials-datepicker.component.html',
  styleUrls: ['./materials-datepicker.component.scss'],
})
export class MaterialsDatepickerComponent {
  myDate = new FormControl(new Date());
  form: FormGroup = this.fb.group({
    hello: [''],
  });
  constructor(private fb: FormBuilder) {}
}
