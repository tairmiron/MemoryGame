import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {

  isCardOpen: boolean;

  @Input() cards: [];
  @Output() messageEvent = new EventEmitter<number>();

  ngOnInit(): void {
    this.isCardOpen = false;
  }

  cardFliped(card) {
    if(!card.isCardOpen){
      card.isCardOpen = true;
      this.messageEvent.emit(card);
    }
  }
}
