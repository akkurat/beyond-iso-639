import { Component } from '@angular/core';
import { TranslationsService } from '../translations.service';

@Component({
  selector: 'app-multiple-choice',
  templateUrl: './multiple-choice.component.html',
  styleUrls: ['./multiple-choice.component.scss']
})
export class MultipleChoiceComponent {
  translations: { a: string; b: string; matched: boolean; }[];

  constructor(private translationService: TranslationsService) {
    this.translations = translationService.getTranslations().map(a=>({a:a[0], b:a[1], matched: false}));
  }
}
