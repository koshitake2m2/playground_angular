import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import {
  MatCommonModule,
  MatLineModule,
  MatNativeDateModule,
  MatOptionModule,
  MatPseudoCheckboxModule,
  MatRippleModule,
} from '@angular/material/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

const matModules = [
  MatCardModule,
  MatLineModule,
  MatListModule,
  MatButtonModule,
  MatOptionModule,
  MatCommonModule,
  MatRippleModule,
  MatDividerModule,
  MatNativeDateModule,
  MatPseudoCheckboxModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
];
const modules = [CommonModule, ReactiveFormsModule, ...matModules];

/**
 * このプロジェクトで使用するモジュールをまとめたモジュール.
 */
@NgModule({
  imports: modules,
  exports: modules,
})
export class CustomModule {}
