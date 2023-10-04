import { Component, OnInit } from '@angular/core';
import { TranslationsService } from '../translations.service';

type Card = {
  group: number;
  caption: string;
  revealed: boolean;
  done: boolean;
};

@Component({
  selector: 'app-memory',
  templateUrl: './memory.component.html',
  styleUrls: ['./memory.component.scss']
})
export class MemoryComponent implements OnInit {
  cards: Card[] = []
  constructor(private translationsService: TranslationsService) { }
  ngOnInit(): void {
    const translations = this.translationsService.getTranslations()

    this.cards = []
    for (const [i, languages] of translations.entries()) {
      this.cards.push({ group: i, caption: languages[0], revealed: false, done: false })
      this.cards.push({ group: i, caption: languages[1], revealed: false, done: false })
    }

  }
  reveal(evCard: Card) {
    for (const card of this.cards) {
      if (!card.done) {
        if (card.revealed) {
          if (card.group == evCard.group) {
            evCard.done = true;
            card.done = true;
            evCard.revealed = true
          }
          else {
            evCard.revealed = false
            card.revealed = false
          }
        }
      }
    }
    evCard.revealed = true;
  }

}
