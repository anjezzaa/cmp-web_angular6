import { Component, input } from '@angular/core';
import { NgIf } from "../../../../../node_modules/@angular/common/index";
import { Ticket } from './ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [NgIf],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  // @Input 
  data = input.required<Ticket>();
}
