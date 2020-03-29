import { Component, OnInit } from '@angular/core';
import{ Quote } from '../quote'

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {

  quotes : Quote[]=[
    new Quote(0 , 0, "Only when a  mosquito lands on your testicles will you know conflicts can be solved without violence", "Victor Mongare","Dalai Lama" ,new Date(2020,2,1)),
    new Quote(0 , 0, "The biggest mistake is not trying at all" ,"Victor Mongare","Steve Jobs" ,new Date(2020,2,2) ),
    new Quote(0 , 0 , "Never give up " , "Victor Mongare","John cena" ,new Date(2020,2,3)),
    new Quote(0, 0 , "Don't think you are know you are" ,"Victor Mongare","Morpheus-The Matrix" ,new Date(2020,2,4)),
    new Quote(0, 0 , "It is useless to meet revenge with revenge: it will heal nothing" ,"Victor Mongare","Frodo Baggins-Lord of the Rings" ,new Date(2020,2,5))
  ]
  toggleDetails(index){
    this.quotes[index].showName = !this.quotes[index].showName
  }

  addUpvote(i){
    this.quotes[i].upvote += 1;
  }
  addDownvote(i){
    this.quotes[i].downvote += 1;
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
  
startNumber:number
lastNumber:number
counter:number

highlightUpvote(){

  this.startNumber = 0
  this.lastNumber = 0

   for(this.counter=0 ; this.counter < this.quotes.length; this.counter++) {
    this.lastNumber = this.quotes[this.counter].upvote;
    if(this.lastNumber> this.startNumber){
      this.startNumber = this.lastNumber
    }
  }
      
  return  this.startNumber
}
  
  constructor() { }

  ngOnInit(): void {
  }

}
