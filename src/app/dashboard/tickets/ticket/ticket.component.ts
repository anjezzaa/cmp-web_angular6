import { Component, input, output, signal } from '@angular/core';
import { NgIf } from "../../../../../node_modules/@angular/common/index";
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // @Input 
  data = input.required<Ticket>();
  close = output();
  detailsVisible = signal(false);

  onToggleDetails(){
    //  this.detailsVisible.set(!this.detailsVisible());
    this.detailsVisible.update((wasVisible) => !wasVisible);
  }

  onMarkAsCompleted(){
    this.close.emit();
  }
  
}
