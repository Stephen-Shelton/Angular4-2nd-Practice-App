import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';

import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  // private characters = [
  //   { name: 'Luke Skywalker', side: 'light' },
  //   { name: 'Darth Vader', side: 'dark' }
  // ];
  private characters: { name: string, side: string }[] = [];

  private logService: LogService;

  // allows us to emit events, similar to Angular's EventEmitter
  // type is void since we're not passing a payload to Subject
  charactersChanged = new Subject<void>();
  http: Http;

  constructor(logService: LogService, http: Http) {
    this.logService = logService;
    this.http = http;
  }

  fetchCharacters() {
    this.http.get('http://swapi.co/api/people')
      .map((response: Response) => {
        // const data = response.json();
        // const extractedChars = data.results;
        // const chars = extractedChars.map((char) => {
        //   return { name: char.name, side: '' };
        // });
        // return chars;
        // map below is native js, different from rxjs map used on observable above
        return response.json().results.map((char) => {
          return { name: char.name, side: '' };
        });
      })
      .subscribe((data) => {
        console.log(data);
        this.characters = data;
        this.charactersChanged.next();
      });
  }

  getCharacters(chosenList) {
    if (chosenList === 'all' && this.characters) {
      return this.characters.slice(); // return copy of array
    }
    return this.characters.filter((char) => {
      return char.side === chosenList;
    });
  }

  onSideChosen(charInfo) {
    const pos = this.characters.findIndex((char) => {
      return char.name === charInfo.name;
    });
    this.characters[pos].side = charInfo.side;
    this.charactersChanged.next(); // emit new event here
    this.logService.writeLog(`Changed side of ${charInfo.name}, new side: ${charInfo.side}`);
  }

  addCharacter(name, side) {
    const pos = this.characters.findIndex((char) => {
      return char.name === name;
    });
    if (pos > -1) {
      return;
    }
    // const newChar = { name: name, side: side };
    const newChar = { name, side };
    this.characters.push(newChar);
  }
}
