import { Component, OnInit } from '@angular/core';
import{ Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote[]=[
    new Quote(0 , 0, "Never judge a book by its cover", "unknown","unknown" ,new Date(2020,3,1)),
    new Quote(0 , 0, "Do what you love" ,"unknown","unknown" ,new Date(2020,3,2) ),
    new Quote(0 , 0 , "Never give up " , "unknown","unknown" ,new Date(2020,3,3)),
    new Quote(0, 0 , "Go for the money" ,"unknown","unknown" ,new Date(2020,3,4))
  ]
  toggleDetails(index){
    this.quotes[index].showName = !this.quotes[index].showName
  }

  addUpvote(index,isUpvote){
   if(isUpvote){
   let upvote= this.quotes[index].upvote
   let like= Math.ceil(upvote + 1)
   this.quotes[index].upvote=like
   }
  }
  addDownvote(index,isDownvote){
   if(isDownvote){
    this.quotes[index].downvote = Math.ceil( this.quotes[index].downvote + 1 )
   }
  }
  quoteDelete(index,toDelete){
    if(toDelete){
      let itemDelete=confirm(`Do you want to delete this quote`)
    
      if(itemDelete){
        this.quotes.splice(index,1)
      }
    }
  }
  addNewQuote(quote){
    this.quotes.push(quote)
  }
  
  constructor() { }

  ngOnInit(): void {
  }

}
