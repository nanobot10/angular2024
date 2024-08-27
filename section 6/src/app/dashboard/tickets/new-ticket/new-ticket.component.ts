import { Component, ElementRef, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
  imports: [ButtonComponent, ControlComponent, FormsModule],
})
export class NewTicketComponent {
  // @ViewChild('form',) private form?: ElementRef<HTMLFormElement>;
  private form = viewChild.required<ElementRef<HTMLFormElement>>('form'); // signal version

  onSubmit(title: string, ticketText: string) {
    console.log(title, ticketText);
    this.form().nativeElement.reset();
  }
}
