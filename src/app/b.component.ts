import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'b-comp',
  template: `
  <h1>B</h1>
  <p>Name: {{data}}</p>
`
})
export class BComponent {
  data = '';
  constructor(private router: Router) {
    this.data = this.router.getCurrentNavigation().extras.state.name;
  }

}
