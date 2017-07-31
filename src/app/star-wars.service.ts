import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';

import { LogService } from './log.service';

@Injectable()
export class StarWarsService {
  private characters = [
    { name: 'Luke Skywalker', side: 'light' },
    { name: 'Darth Vader', side: 'dark' }
  ];

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

  }

  getCharacters(chosenList) {
    if (chosenList === 'all') {
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
