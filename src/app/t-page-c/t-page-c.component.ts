import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './t-page-c.component.html',
})

export class TPageCComponent implements OnInit {
  isTrue: boolean = false;
  constructor() { }
  ngOnInit(): void {
  }
  cambiarColor(){
    this.isTrue = !this.isTrue;
  }
}
