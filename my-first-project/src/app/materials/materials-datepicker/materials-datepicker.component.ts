import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { FormControl } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {
  DateAdapter,
  MAT_DATE_FORMATS,
  MAT_DATE_LOCALE,
  MAT_NATIVE_DATE_FORMATS,
  MatDateFormats,
  NativeDateAdapter,
} from '@angular/material/core';

const MY_DATE_FORMATS: MatDateFormats = {
  parse: {
    dateInput: 'YYYY/MM/DD',
  },
  display: {
    dateInput: 'YYYY/MM/DD',
    monthLabel: undefined,
    monthYearLabel: 'M/YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'M/YYYY',
  },
};

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
      useValue: 'ja-JP',
      // useValue: 'en-US',
    },
    {
      provide: DateAdapter,
      useClass: NativeDateAdapter,
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
}
