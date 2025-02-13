import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-beer',
  standalone: false,
  templateUrl: './beer.component.html',
  styleUrl: './beer.component.css',
})
export class BeerComponent {
  @Input() name: string = '';
  @Input() isFav: boolean = false;
  @Output() addFav: EventEmitter<string> = new EventEmitter<string>();
  @Output() deleteFav: EventEmitter<string> = new EventEmitter<string>();

  addToFavs(b: string) {
    this.addFav.emit(b);
  }
  deleteFromFavs(beer: string) {
    this.deleteFav.emit(beer);
  }
}
