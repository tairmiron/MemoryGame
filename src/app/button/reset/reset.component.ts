import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent implements OnInit {

  @Input() mistake: number = 0;
  @Output() resetEvent = new EventEmitter<any>();

  ngOnInit(): void {
  }

  public restartGame(){
    this.resetEvent.emit();
  }

}
