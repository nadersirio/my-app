import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  products:string[] = []

  constructor() {
    this.products = [
      "mouse",
      "teclado",
      "monitor",
      "headset"
    ]
  }

  ngOnInit(): void {}
}
