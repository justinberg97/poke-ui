import { TestBed } from '@angular/core/testing';
import { SquadService } from './squad.service';

describe('SquadService', () => {
  let service: SquadService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquadService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should add a Pokémon to the squad', (done) => {
    const pokemon = { name: 'Pikachu' };

    service.addPokemonToSquad(pokemon);
    service.squad$.subscribe(squad => {
      expect(squad).toContain(pokemon);
      done();
    });
  });

  it('should remove a Pokémon from the squad', (done) => {
    const pokemon = { name: 'Pikachu' };

    service.addPokemonToSquad(pokemon);
    service.removePokemonFromSquad(pokemon);

    service.squad$.subscribe(squad => {
      expect(squad).not.toContain(pokemon);
      done();
    });
  });
});
