import { NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [NgStyle],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {

  @Input() images: string[] = [];
  @Input() name: string = '';
  @Input() index: number = 0;

  @Output() data = new EventEmitter<{ index: number, images: string[] }>();
  public onClick(i: number): void {
    this.index += i;
    if (this.index < 0) {
      this.index = this.images.length - 1;
    }
    else if (this.index >= this.images.length) {
      this.index = 0;
    }
    this.data.emit({ index: this.index, images: this.images });
  }

  @Output() data1 = new EventEmitter<{ name: string, photo: string }>();
  public openModal(): void {
    this.data1.emit({ name: this.name, photo: this.images[this.index] });
  }
}
