import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  standalone: true,
  selector: 'app-hello-world-index',
  templateUrl: './hello-world-index.component.html',
  styleUrls: ['./hello-world-index.component.scss'],
  imports: [MatCardModule],
})
export class HelloWorldIndexComponent {}
