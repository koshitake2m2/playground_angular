import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { CustomModule } from 'src/app/share/custom.module';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CustomModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
  private readonly fb = inject(FormBuilder);
  private readonly router = inject(Router);
  form: FormGroup = this.fb.nonNullable.group({
    email: [''],
    password: [''],
  });

  onSubmit(): void {
    const { email, password } = this.form.value;
    if (email === 'admin' && password === 'pass') {
      this.router.navigateByUrl('/examples/examples001/loggedin-home');
    }
  }
}
