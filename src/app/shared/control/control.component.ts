import { Component, input, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  //enum
  encapsulation: ViewEncapsulation.None,
  //host
  host: {
    //adds key values added here as properties on host element
    class: 'control'
  }
})
export class ControlComponent {  
  label  = input.required<string>();
}
