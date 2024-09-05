import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  public content: { title1: string, title2: string, route: string }[] = [
    { title1: 'Ejercicio1', title2: 'Pokemon', route: '/pokemon' }, 
    { title1: 'Ejercicio2', title2: 'Rick & Morty', route: '/rickandmorty' }];
  public titles: string[] = [this.content[0].title1, this.content[1].title1];
  public route: string = '';

  public changeTitle(event: MouseEvent, i: number): void {
    if (event.type === 'mouseover') {
      this.titles[i] = this.content[i].title2;
    }
    else {
      this.titles[i] = this.content[i].title1;
    }
  }
  ngOnInit() {
    this.titles = [this.content[0].title1, this.content[1].title1];
    this.route = this.content[0].route;
  }
}
