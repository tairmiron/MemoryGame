import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() card: {img: string, isCardOpen: boolean};
  @Output() cardFlipEvent = new EventEmitter<{img: string, isCardOpen: boolean}>();

  public cardFliped(card){
    this.cardFlipEvent.emit(card);
  }
}
