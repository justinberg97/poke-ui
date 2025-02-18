import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SquadService } from '../services/squad.service';  // Import the service
import { Observable } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  pokemonList: any[] = [];
  searchTerm: string = '';
  squad$: Observable<any[]>;

  constructor(private http: HttpClient, private squadService: SquadService) {
    this.squad$ = this.squadService.squad$;
  }

    ngOnInit(): void {
    this.fetchPokemon();
  }

  fetchPokemon(): void {
    this.http.get<any>('https://pokeapi.co/api/v2/pokemon?limit=151').subscribe(response => {
      this.pokemonList = response.results.map((pokemon: any, index: number) => ({
        name: pokemon.name,
        image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1}.png`
      }));
    });
  }

  addPokemonToSquad(pokemon: any): void {
    this.squadService.addPokemonToSquad(pokemon);
  }

  removePokemonFromSquad(pokemon: any): void {
    this.squadService.removePokemonFromSquad(pokemon);
  }

  isPokemonInSquad(pokemon: any): boolean {
    let squad = this.squadService.squadSource.value;
    return squad.some(p => p.name === pokemon.name);
  }
}
