export class Quote {
  showName : boolean
  constructor(public upvote : number, public downvote : number,public description: string , public  name: string){
    this.showName=false;
  }
}
