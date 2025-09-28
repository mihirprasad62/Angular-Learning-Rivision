import { Interpolation } from './01_interpolation/interpolation';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomComponent } from './02_custom_component/custom-component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Interpolation,CustomComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="Mihir Prasad Bhuyan"
}
