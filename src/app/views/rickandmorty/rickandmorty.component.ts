import { Component } from '@angular/core';
import { ContentComponent } from '../../components/content/content.component';
import { DataService } from '../../services/data.service';
import { Result } from '../../models/response.interface';
import { ResultEpisode } from '../../models/response.interfaceEpisodes';
import { ResultLocation } from '../../models/response.interfaces.location';

@Component({
  selector: 'app-rickandmorty',
  standalone: true,
  imports: [ContentComponent],
  templateUrl: './rickandmorty.component.html',
  styleUrl: './rickandmorty.component.css'
})
export class RickandmortyComponent {
  public constructor(public service: DataService) { }

  public titles: string[] = ['Personajes', 'Episodios', 'Localizaciones'];
  public urlApi: string = 'https://rickandmortyapi.com/api/character';
  public urlEpisodes: string = 'https://rickandmortyapi.com/api/episode';
  public urlLocations: string = 'https://rickandmortyapi.com/api/location';
  public characters: Result[] = [];
  public episodes: ResultEpisode[] = [];
  public locations: ResultLocation[] = [];
  public name: string = '';
  public status: string = '';
  public index: number = 0;
  public current: number = 0;

  public getCharacters(url: string): void {
    this.service.getResponseCharacacters(url).subscribe(response => {
      this.characters = response.results;
      this.name = this.characters[0].name;
      this.status = this.characters[0].status;
    })
 
  }

  public getEpisodes(url: string): void {
    this.service.getResponseEpisodes(url).subscribe(response => {
      this.episodes = response.results;
      this.name = this.episodes[0].name;
      this.status = this.episodes[0].air_date;
    })
  }

  public getLocations(url: string): void {
    this.service.getResponseLocations(url).subscribe(response => {
      this.locations = response.results;
      this.name = this.locations[0].name;
      this.status = this.locations[0].type;
    })
  }

  //no sé porqué tengo que hacer click 2 veces en episodios y localizaciones para que lo cargue

  public onClick(i: number): void {
    if (i === 0) {
      this.index=0;
      this.getCharacters(this.urlApi);
      this.current = 0;
    }
    else if (i === 1) {
      this.index=0;
      this.getEpisodes(this.urlEpisodes);
      this.current = 1;
    }
    else if (i === 2) {
      this.index=0;
      this.getLocations(this.urlLocations);
      this.current = 2;
    }
  }

  public changePage(i: number) {
    this.index += i
    if (this.index < 0) {
      this.index = 0;
    }
    else if (this.index > 20) {
      this.index = 20;
    }
    if (this.current === 0) {
      this.name = this.characters[this.index].name;
      this.status = this.characters[this.index].status;
    }
    else if (this.current === 1) {
      this.name = this.episodes[this.index].name;
      this.status = this.episodes[this.index].air_date;
    }
    else if (this.current === 2) {
      this.name = this.locations[this.index].name;
      this.status = this.locations[this.index].type;
    }
  }

  ngOnInit(): void {
    this.getCharacters(this.urlApi);
  }
 
}
