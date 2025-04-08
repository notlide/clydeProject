import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css',
})
export class ButtonComponent {
  @Input() btnText: string = '';
  @Input() btnClass: string = '';

  @Output() onClicked = new EventEmitter<any>();

  onClick() {
    debugger;
    this.onClicked.emit();
  }
}
