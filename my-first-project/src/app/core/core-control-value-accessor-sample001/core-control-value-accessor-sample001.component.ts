import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { SubTodosFormComponent } from './sub-todos-form/sub-todos-form.component';
import { CustomModule } from 'src/app/share/custom.module';

// Model
export interface CustomForm001Todo {
  name: string;
  subTodos: CustomForm001SubTodo[];
}
export interface CustomForm001SubTodo {
  name: string;
}

// Form
export type CustomForm001TodoFormGroup = FormGroup<{
  name: FormControl<string>;
  subTodos: FormControl<CustomForm001SubTodo[]>;
}>;

@Component({
  selector: 'app-core-control-value-accessor-sample001',
  standalone: true,
  imports: [CustomModule, SubTodosFormComponent],
  templateUrl: './core-control-value-accessor-sample001.component.html',
  styleUrls: ['./core-control-value-accessor-sample001.component.scss'],
})
export class CoreControlValueAccessorSample001Component {
  private readonly fb = inject(FormBuilder);
  form: CustomForm001TodoFormGroup = this.fb.nonNullable.group({
    name: [''],
    subTodos: [[] as CustomForm001SubTodo[]],
  });
  constructor() {}
}
