import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CustomModule } from 'src/app/share/custom.module';

@Component({
  selector: 'app-loggedin-home',
  standalone: true,
  imports: [CustomModule],
  templateUrl: './loggedin-home.component.html',
  styleUrls: ['./loggedin-home.component.scss'],
})
export class LoggedinHomeComponent {
  private readonly router = inject(Router);
  logout(): void {
    this.router.navigateByUrl('/examples/examples001/login-form');
  }
}
