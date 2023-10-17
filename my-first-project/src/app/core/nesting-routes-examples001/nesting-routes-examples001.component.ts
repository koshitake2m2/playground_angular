import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChildAComponent } from './child-a/child-a.component';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-nesting-routes-examples001',
  standalone: true,
  imports: [CommonModule, ChildAComponent, RouterOutlet, RouterModule],
  templateUrl: './nesting-routes-examples001.component.html',
  styleUrls: ['./nesting-routes-examples001.component.scss'],
})
export class NestingRoutesExamples001Component {}
