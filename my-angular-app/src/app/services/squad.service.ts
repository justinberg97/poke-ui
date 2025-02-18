import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquadService {
  public squadSource = new BehaviorSubject<any[]>([]);  // Holds the squad's state
  squad$ = this.squadSource.asObservable();  // Exposes the squad state to components

  constructor() {}

  // Adds a Pokemon to the squad
  addPokemonToSquad(pokemon: any): void {
    const currentSquad = this.squadSource.value;
    if (currentSquad.length < 6 && !currentSquad.some(p => p.name === pokemon.name)) {
      this.squadSource.next([...currentSquad, pokemon]);
    }
  }

  // Removes a Pokemon from the squad
  removePokemonFromSquad(pokemon: any): void {
    const currentSquad = this.squadSource.value;
    this.squadSource.next(currentSquad.filter(p => p.name !== pokemon.name));
  }
}
