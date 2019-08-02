import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'a-comp',
  template: `
  <h1>A</h1>
  <p>Name: {{data}}</p>
`
})
export class AComponent {
  data = '';
  constructor(private router: Router) {
    console.log(this.router.getCurrentNavigation())
    this.data = this.router.getCurrentNavigation().extras.state.name;
  }

}
