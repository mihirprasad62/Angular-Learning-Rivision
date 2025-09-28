import { Component } from '@angular/core';

@Component({
  selector: 'app-counter-app',
  imports: [],
  templateUrl: './counter-app.html',
  styleUrl: './counter-app.css',
})
export class CounterApp {
  count = 0;
  // increment() {
  //   this.count += 1;
  // }
  // decrement() {
  //   this.count -= 1;
  // }
  // reset() {
  //   this.count = 0;
  // }
  handleCount(val: string) {
    if (val == 'minus') {
      if (this.count > 0) {
        this.count -= 1;
      }
    } else if (val == 'plus') {
      this.count += 1;
    } else {
      this.count = 0;
    }
  }
}
