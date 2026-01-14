import { 
  Component, 
  ElementRef, 
  inject, 
  input, 
  ViewEncapsulation 
} from '@angular/core';

@Component({
  selector: 'app-control',
  standalone: true,
  imports: [],
  templateUrl: './control.component.html',
  styleUrl: './control.component.css',
  encapsulation: ViewEncapsulation.None,   //enum
  //host
  host: {
    //adds key values added here as properties on host element
    class: 'control',
    '(click)' : 'onClick()',
  }
})
export class ControlComponent {  
  // @HostListener('click')
  label  = input.required<string>();
  private el = inject(ElementRef)

  onClick() {
    console.log('Clicked!');
    console.log(this.el);
  }

}