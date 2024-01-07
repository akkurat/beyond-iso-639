import { Component } from '@angular/core';
import { TranslationsService } from '../translations.service';

interface WordMatch {
  a: string;
  b: string;
  matched: boolean;
}

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent {
  translations: WordMatch[];

  testA? : WordMatch;

  constructor(private translationService: TranslationsService) {
    this.translations = translationService.getTranslations().map(a=>({a:a[0], b:a[1], matched: false}));
  }

  public activate(params:WordMatch) {
    params.matched = !params.matched;
    console.log(params);
  }
}
