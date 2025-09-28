import { Component } from '@angular/core';

@Component({
  selector: 'app-function-call-on-btn-click',
  imports: [],
  templateUrl: './function-call-on-btn-click.html',
  styleUrl: './function-call-on-btn-click.css'
})
export class FunctionCallOnBtnClick {
  handleClick(){
    console.log("function called")
    this.otherFunction()
  }

  otherFunction(){
    console.log("otherfunction called.")
  }

}
