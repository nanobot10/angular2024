import { Component, EventEmitter, Input, Output, computed, input, output } from '@angular/core';
import { User } from './user.model';
import { CardComponent } from '../shared/card/card.component';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  
  @Input({required: true}) user!: User;
  @Input({required: true}) selected!: boolean;
  @Output() select = new EventEmitter<string>()


  // same logic here but with signals
  // select = output<string>();
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath = computed(()=> {
  //   return 'assets/users/' + this.avatar();
  // })


  get imagePath() {
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser() {
    this.select.emit(this.user.id);
  }

}
