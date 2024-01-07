import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-word',
  templateUrl: './word.component.html',
  styleUrls: ['./word.component.scss'],

})
export class WordComponent {

  @Input()
  wordText = '';
}
