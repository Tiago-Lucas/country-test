import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent {
  @Input()
  flag: string | undefined

  @Input()
  country: string | undefined

  @Input()
  population: string | undefined

  @Input()
  region: string | undefined

  @Input()
  capital: string | undefined
}
