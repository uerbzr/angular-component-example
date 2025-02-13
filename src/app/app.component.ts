import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'Beer App';
  beers: string[] = ['Corona', 'Heineken', 'Budweiser', 'Guinness'];
  favs: string[] = [];
  newBeer: string | null = null;

  addBeer() {
    if (!this.newBeer) {
      return;
    }
    this.beers.push(this.newBeer);
    this.newBeer = null;
  }

  addFav(beer: string): void {
    console.log(beer);
    if (this.favs.indexOf(beer) === -1) {
      this.favs.push(beer);
    }
  }
  deleteFav(beer: string): void {
    this.favs = this.favs.filter((b) => b !== beer);
  }
  isinFav(beer: string) {
    if (this.favs.indexOf(beer) === -1) {
      return false;
    }
    return true;
  }
}
