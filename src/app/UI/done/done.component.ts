import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-done',
  templateUrl: './done.component.html',
  styleUrls: ['./done.component.css']
})
export class DoneComponent implements OnInit {

  @Input() awsome: boolean = false;

  ngOnInit(): void {
  }

}
