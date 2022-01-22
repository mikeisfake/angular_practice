import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface PokeTypes {
  type: {
    [key: string]: string;
  }
}
export interface Pokemon {
  name: string;
  height: number;
  types: PokeTypes[];
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private http: HttpClient) {}

  count = 0
  pokemon : string = ''
  currentPokemon : Pokemon[] = []

  increment() {
    this.count = this.count+=1
  }
  decrement() {
    this.count = this.count-+1
  }

  handleInput(inputPoke: string) {
    this.pokemon = inputPoke
    console.log(this.pokemon)
  }

  getPokemon() {
    this.http.get<any>(`https://pokeapi.co/api/v2/pokemon/${this.pokemon}/`).subscribe(data => {
      this.currentPokemon.push(data)
      console.log(this.currentPokemon[0])
    });
  }
}
