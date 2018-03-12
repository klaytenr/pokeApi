import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HttpService {

  constructor(private _http: HttpClient) {
    this.getPokemon();
    this.interestingFact();
    this.shareFact();
  }
  getPokemon() {
    let charmander = this._http.get('https://pokeapi.co/api/v2/pokemon/4/');
    charmander.subscribe(data => console.log('Got our pokemon!', data));
  }
  interestingFact() {
    let fact1 = this._http.get('https://pokeapi.co/api/v2/pokemon/4/');
    fact1.subscribe(data => {
      let result = 'Charmander\'s abilities are ';
      for (let x = 0; x < data.abilities.length; x++) {
        if (x == 0) {
          result += data.abilities[x].ability.name;
        } else {
          result += ' and ';
          result += data.abilities[x].ability.name;
        }
      }
      console.log(result);
    }
    )
  }
  shareFact() {
    let pokemon1 = this._http.get('https://pokeapi.co/api/v2/ability/94/');
    pokemon1.subscribe(data => {
      console.log(String(data.pokemon.length), 'other pokemon share the ability of', String(data.name))
      let result = 'Their names are ';
      for (let x = 0; x < data.pokemon.length; x++) {
        if (x == 0) {
          result += data.pokemon[x].pokemon.name;
        }else if(x == data.pokemon.length-1){
          result += ' and ';
          result += data.pokemon[x].pokemon.name;
        } else {
          result += ', ';
          result += data.pokemon[x].pokemon.name;
        }
      }
      console.log(result);
    });
    let pokemon2 = this._http.get('https://pokeapi.co/api/v2/ability/66/');
    pokemon2.subscribe(data => {
      console.log(String(data.pokemon.length), 'other pokemon share the ability of', String(data.name))
      let result = 'Their names are ';
      for (let x = 0; x < data.pokemon.length; x++) {
        if (x == 0) {
          result += data.pokemon[x].pokemon.name;
        }else if(x == data.pokemon.length-1){
          result += ' and ';
          result += data.pokemon[x].pokemon.name;
        } else {
          result += ', ';
          result += data.pokemon[x].pokemon.name;
        }
      }
      console.log(result);
    });  }
}
