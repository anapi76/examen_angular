import { Component } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { DataService } from '../../services/data.service';
import { Result } from '../../models/response.interface';
import { Sprites } from '../../models/response.interfacePokemon';
import { ModalComponent } from '../../components/modal/modal.component';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CardComponent,ModalComponent],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.css'
})
export class PokemonComponent {
  public constructor(public service: DataService) { }

  public url: string = 'https://pokeapi.co/api/v2/pokemon/';
  public nextPage: null | string = '';
  public prevPage: null | string = '';
  public images: string[] = [];
  public image:string='';
  public name:string='';
  public modal:string='modal';
  public imageModal:string='';

  public content: {name: string, images:string[]}[] = [];
  
  public getPokemons(url: string): void {
    this.service.getResponse(url).subscribe(response => {
      response.results.map((element=>{
        this.service.getResponsePokemon(element.url).subscribe(response => {
          this.content.push({name: element.name,images: [response.sprites.front_default,  response.sprites.back_default,response.sprites.back_shiny, response.sprites.front_shiny]});
        });
      }))
      this.nextPage = response.next;
      this.prevPage = response.previous;
    });
  }
  
  public onClick(data:{ index:number,images:string[]}): void {
    this.image = data.images[data.index];
  }

  public changePage(i: number): void {
    if (i === 1) {
      if (this.nextPage !== null) {
        this.content=[];
        this.getPokemons(this.nextPage);
      }
    }
    else {
      if (this.prevPage !== null) {
        this.content=[];
        this.getPokemons(this.prevPage);
      }
    }
  }

  public onModal(data1:{name:string,photo:string}): void {
    this.imageModal = data1.photo;
    this.name=data1.name;
    this.modal = 'modal show-modal';
  }

  public onClose(modal: string): void {
    this.modal = modal;
  }

  ngOnInit() {
    this.getPokemons(this.url);
    this.image=this.images[0];
  }
}