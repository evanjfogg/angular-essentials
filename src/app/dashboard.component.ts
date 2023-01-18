import { Component } from '@angular/core';

@Component ({
  selector: 'app-dashboard',
  template: `
  <button (click) = 'clicked()'>Click Here</button>
  <!-- <p>{{ loadState }}</p> -->
  <p [textContent] = "loadState"></p>
  <input type = 'text' [(ngModel)] = 'loadState'>
  `
})

export class DashboardComponent {
  loadState = 'loading';

  clicked() {
    this.loadState = 'finished';
  }
}
