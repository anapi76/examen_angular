import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  standalone: true,
  imports: [NgClass],
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
@Input() imageModal:string='';
@Input() name:string='';
@Input() modal:string='';

@Output() closeModal = new EventEmitter<string>();
  public onClose(): void {
    this.closeModal.emit('modal');
  }
}
