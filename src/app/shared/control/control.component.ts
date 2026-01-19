import { 
  AfterContentChecked,
  AfterContentInit,
  afterNextRender,
  afterRender,
  Component, 
  contentChild, 
  ContentChild, 
  ElementRef, 
  inject, 
  input, 
  ViewEncapsulation ,

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
export class ControlComponent implements AfterContentInit {  
  // @HostListener('click')
  label  = input.required<string>();
  private el = inject(ElementRef);
  // @ContentChild('input') private control?: ElementRef<
  //   HTMLInputElement | HTMLTextAreaElement
  //   >;
  private control = 
    contentChild<ElementRef<HTMLInputElement | HTMLTextAreaElement>>('input');

    constructor(){
      afterRender(() => {
        console.log('afterRender');
      });
      afterNextRender(() => {
        console.log('afterNextRender');
      });
    }
    ngAfterContentInit(){
      //...
    }
  onClick() {
    console.log('Clicked!');
    console.log(this.el);
    console.log(this.control());
  }

}