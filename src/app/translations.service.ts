import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
// TODO: multi implementations
export class TranslationsService {
  private translations: string[][];

  constructor() { 
    // they will become more complex objects, for example with a uuid to its origin per word
    // or a link to wiktionary
    this.translations = [
      ['gigu', 'Arschloch'],
      ['lymsydr', 'Langsamer Mensch'],
      ['möffegöög', 'Unausstehlicher, hochnäsiger Mensch' ],
      ['Siebesiech ', 'Jemand, der alles kann (oder zumindest das Gefühl hat)'],
      ['fair', 'ok, einverstanden'],
      ['habere', 'essen'],
      ['tschudere', 'die Haare empor stellen']
    ]
  }

  getTranslations(): string[][] {
    return this.translations;
  }
  
}
