import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SquadService {
  public squadSource = new BehaviorSubject<any[]>([]); 
  squad$ = this.squadSource.asObservable(); 

  constructor() {}
  addPokemonToSquad(pokemon: any): void {
    const currentSquad = this.squadSource.value;
    if (currentSquad.length < 6 && !currentSquad.some(p => p.name === pokemon.name)) {
      this.squadSource.next([...currentSquad, pokemon]);
    }
  }
  removePokemonFromSquad(pokemon: any): void {
    const currentSquad = this.squadSource.value;
    this.squadSource.next(currentSquad.filter(p => p.name !== pokemon.name));
  }
}
