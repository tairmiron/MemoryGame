import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'memorygame';

  cards: Array<{id: number, img: string, isCardOpen: boolean}>;
  fliped: Array<{id: number, img: string, isCardOpen: boolean}>;
  falseExist: boolean;
  awsome: boolean;
  mistake:number;

  constructor() {
    this.cards = [];
    this.fliped = [];
    this.falseExist = true;
    this.awsome = false;
    this.mistake = 0;
   }

  ngOnInit(): void {
    this.loadBoard();
  }
  restartGame(): void{
    this.awsome = false;

    for( let card in this.cards) {
      this.cards[card].isCardOpen = false;
    }
    this.cards = this.cards.sort(() => Math.random() - 0.5);
    this.mistake = 0;
  }
  loadBoard(): void {
    let imgArr = ["beersheva.png","telaviv.png","htelaviv.png","haifa.png",
                  "hhaifa.png","ashdod.png","raanana.png","beitar.png"];
    let _id = 1;
    for(let img = 0 ; img < 8 ; img ++ ){
      for(let cnt = 0 ; cnt < 2 ; cnt ++ ){
        this.cards.push({id: _id, img: imgArr[img], isCardOpen: false});
        _id++;
      }
    }
    this.cards = this.cards.sort(() => Math.random() - 0.5)
  }

  resCardFliped($event): void {
    this.fliped.push($event);
    if(this.fliped.length === 2) this.CheckMatch(this.fliped);
    this.isFinished();
  }

  CheckMatch(fliped): void {
    if(fliped[0].img !== fliped[1].img || fliped[0].id === fliped[1].id){
      this.mistake++;
      setTimeout(function() {
        fliped[0].isCardOpen = false;
        fliped[1].isCardOpen = false;
      }, 700);
    }
    else {
      fliped[0].isCardOpen = true;
      fliped[1].isCardOpen = true;
    }
    this.fliped = [];
  }
  isFinished() {
    this.falseExist = false;
    for( let card in this.cards) {
      if(!this.cards[card].isCardOpen) {
        this.falseExist = true;
        break;
      }
    }
    if(!this.falseExist) {
      this.awsome = true;
    }
  }
}
