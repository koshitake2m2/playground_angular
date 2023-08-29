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

// Form
type SubTodosFormArray = FormArray<SubTodoFormGroup>;
type SubTodoFormGroup = FormGroup<{ name: FormControl<string> }>;

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

  //////////////
  // ControlValueAccessor
  //////////////
  writeValue(obj: any): void {
    throw new Error('Method not implemented.');
  }
  registerOnChange(fn: any): void {
    throw new Error('Method not implemented.');
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
