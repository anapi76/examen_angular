import { Routes } from '@angular/router';
import { PokemonComponent } from './views/pokemon/pokemon.component';
import { RickandmortyComponent } from './views/rickandmorty/rickandmorty.component';

export const routes: Routes = [
    {path:'', redirectTo: 'pokemon', pathMatch: 'full'},
    { path: 'pokemon', component: PokemonComponent },
    { path: 'rickandmorty', component: RickandmortyComponent}
];
