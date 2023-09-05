import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  AbstractControl,
  ControlValueAccessor,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  NG_VALIDATORS,
  NG_VALUE_ACCESSOR,
  ValidationErrors,
  Validator,
} from '@angular/forms';
import { CustomModule } from 'src/app/share/custom.module';
import { CustomForm001SubTodo } from '../core-control-value-accessor-sample001.component';

// Form
type SubTodosFormArray = FormArray<SubTodoFormGroup>;
type SubTodoFormGroup = FormGroup<{
  name: FormControl<string>;
  prefix: FormControl<string>;
  suffix: FormControl<string>;
}>;
type SubTodoFormData = {
  name: string;
  prefix: string;
  suffix: string;
};

@Component({
  selector: 'app-sub-todos-form',
  standalone: true,
  imports: [CustomModule],
  templateUrl: './sub-todos-form.component.html',
  styleUrls: ['./sub-todos-form.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: SubTodosFormComponent,
      multi: true,
    },
    {
      provide: NG_VALIDATORS,
      useExisting: SubTodosFormComponent,
      multi: true,
    },
  ],
})
export class SubTodosFormComponent
  implements OnInit, ControlValueAccessor, Validator
{
  private readonly fb = inject(FormBuilder);
  form: SubTodosFormArray = this.fb.nonNullable.array([] as SubTodoFormGroup[]);

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  private toFormDatas(subTodos: CustomForm001SubTodo[]): SubTodoFormData[] {
    return subTodos.map((subTodo) => {
      const [prefix, name, suffix] = subTodo.name.split('_');
      return {
        prefix,
        name,
        suffix,
      };
    });
  }

  private toSubTodos(fds: SubTodoFormData[]): CustomForm001SubTodo[] {
    return fds.map((fd) => {
      return {
        name: `${fd.prefix}_${fd.name}_${fd.suffix}`,
      };
    });
  }

  //////////////
  // ControlValueAccessor
  //////////////

  // 親から渡されるcontrolをこのコンポーネントのformに反映する
  writeValue(obj: CustomForm001SubTodo[]): void {
    this.form.setValue(this.toFormDatas(obj));
  }
  // このコンポーネントのformの値を親に伝える
  registerOnChange(fn: (v: CustomForm001SubTodo[]) => void): void {
    this.form.valueChanges.subscribe((values) =>
      fn(this.toSubTodos(values as SubTodoFormData[]))
    );
  }
  registerOnTouched(fn: any): void {
    throw new Error('Method not implemented.');
  }
  setDisabledState?(isDisabled: boolean): void {
    throw new Error('Method not implemented.');
  }
  //////////////
  // Validator
  //////////////
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.form.errors;
  }
}
