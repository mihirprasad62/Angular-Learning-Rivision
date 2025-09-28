import { Interpolation } from './01_interpolation/interpolation';
import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CustomComponent } from './02_custom_component/custom-component';
import { FunctionCallOnBtnClick } from './03-function-call-on-btn-click/function-call-on-btn-click';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Interpolation,CustomComponent,FunctionCallOnBtnClick],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name="Mihir Prasad Bhuyan"
}
