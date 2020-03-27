import { Component, OnInit } from '@angular/core';
import{ Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote[]=[
    new Quote(0 , 0, "Never judge a book by its cover", "unknown"),
    new Quote(0 , 0, "Do what you love" ,"unknown"),
    new Quote(0 , 0 , "Never give up " , "unknown"),
    new Quote(0, 0 , "Go for the money" ,"unknown")
  ]


  constructor() { }

  ngOnInit(): void {
  }

}
