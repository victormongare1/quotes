import { Component, OnInit } from '@angular/core';
import{ Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote[]=[
    new Quote(0 , 0, "Never judge a book by its cover", "unknown","unknown"),
    new Quote(0 , 0, "Do what you love" ,"unknown","unknown"),
    new Quote(0 , 0 , "Never give up " , "unknown","unknown"),
    new Quote(0, 0 , "Go for the money" ,"unknown","unknown")
  ]
  toggleDetails(index){
    this.quotes[index].showName = !this.quotes[index].showName
  }

  addUpvote(index,isUpvote){
   if(isUpvote){
    this.quotes[index].upvote =(this.quotes[index].upvote +1 )
   }
  }
  addDownVote(index,isDownvote){
   if(isDownvote){
    this.quotes[index].downvote = ( this.quotes[index].downvote + 1 )
   }
  }
  addNewQuote(quote){
    let quoteLenght=this.quotes.length
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
