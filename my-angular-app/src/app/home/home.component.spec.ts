import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HomeComponent } from './home.component';
import { SquadService } from '../services/squad.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
      providers: [SquadService]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly detect if a Pokémon is in the squad', () => {
    const pokemon = { name: 'Pikachu' };
    component.addPokemonToSquad(pokemon);

    expect(component.isPokemonInSquad(pokemon)).toBeTrue();
  });

  it('should add a Pokémon to the squad when the button is clicked', () => {
    const pokemon = { name: 'Charmander' };
    spyOn(component, 'addPokemonToSquad');

    component.addPokemonToSquad(pokemon);
    expect(component.addPokemonToSquad).toHaveBeenCalledWith(pokemon);
  });
});
