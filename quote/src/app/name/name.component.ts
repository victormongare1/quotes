import { Component, OnInit ,Input} from '@angular/core';
import{ Quote } from '../quote'

@Component({
  selector: 'app-name',
  templateUrl: './name.component.html',
  styleUrls: ['./name.component.css']
})
export class NameComponent implements OnInit {
  
@Input () quote : Quote;
  constructor() { }

  ngOnInit(): void {
  }

}
