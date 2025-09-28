import { Component } from '@angular/core';

@Component({
  selector: 'app-datatype',
  imports: [],
  templateUrl: './datatype.html',
  styleUrl: './datatype.css',
})
export class Datatype {
  name: string = 'mihir';
  data: string | boolean = 'true';
  other:any=10;

  
  updateName() {
    console.log(this.name);
    this.other='abc'
  }
  ngOnInit() {
   this.updateVar()
  }
  updateVar() {
    let title = 'satya';

    console.log(title);
     this.updateName();
  }
}
