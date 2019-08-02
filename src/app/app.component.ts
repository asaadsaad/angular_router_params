import { Component } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
  
  <nb-layout>
  <nb-layout-header fixed>
    <button nbButton status="success" size="tiny" (click)="toggle()">Toggle</button>
    <button nbButton status="info" size="tiny" (click)="toggleCompact()">Toggle Compact</button>
  </nb-layout-header>

  <nb-sidebar tag="left"></nb-sidebar>
  <nb-sidebar right tag="right"></nb-sidebar>

  <nb-layout-column class="colored-column-warning">
    <button nbButton status="primary" (click)="go('A')">Go to A</button>
    <button nbButton status="info" (click)="go('B')">Go to B</button>
    <button nbButton status="primary" [routerLink]="['a']" [state]="{ name: 'Mike' }">DOES NOT WORK</button>
    <a nbButton [routerLink]="['a']" [state]="{ name: 'Mike' }">Go to A</a>

    <nb-card>
      <nb-card-body>
        <router-outlet></router-outlet>
      </nb-card-body>
    </nb-card>
  </nb-layout-column>



</nb-layout>
`,
  styles: [`
    :host nb-layout-header button:last-child {
      margin-left: auto;
    }
  `,
    `button{ margin: 0 10px;}`,
    `nb-card{margin: 10px 0;}`],
})
export class AppComponent {
  constructor(private sidebarService: NbSidebarService, private router: Router) {
  }

  toggle() {
    this.sidebarService.toggle(false, 'left');
  }

  toggleCompact() {
    this.sidebarService.toggle(true, 'right');
  }

  go(component) {
    if (component === 'A') this.router.navigate(['a'], { state: { name: 'Asaad' } })
    if (component === 'B') this.router.navigate(['b'], { state: { name: 'Miles' } })
  }
}
