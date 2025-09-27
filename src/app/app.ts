import { Interpolation } from './01_interpolation/interpolation';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Interpolation],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="Mihir Prasad Bhuyan"
}
