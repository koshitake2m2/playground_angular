import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-todo-page',
  standalone: true,
  imports: [],
  templateUrl: './todo-page.component.html',
  styleUrl: './todo-page.component.scss',
})
export class TodoPageComponent implements OnInit {
  route = inject(ActivatedRoute);
  id = '';

  constructor() {
    this.route.params.subscribe((params) => {
      this.id = params['todoId'];
    });
  }
  ngOnInit(): void {}
}
