import { Component, OnInit } from '@angular/core';

@Component({
  standalone: false,
  selector: 'lib-my-lib1',
  template: ` <p>my-lib1 works!</p> `,
  styles: [],
})
export class MyLib1Component implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
