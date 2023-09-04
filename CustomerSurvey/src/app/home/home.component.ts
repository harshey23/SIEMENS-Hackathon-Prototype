import { Component, OnInit } from '@angular/core';
import { TitleService } from '../service/title.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  isVisible: boolean = true;
  constructor(private data: TitleService) {

  }
  title1: string = 'Survey Page 1';
  title2: string = 'Survey Page 2';
  title3: string = 'Survey Page 3';

  message: string = '360 Insights Pro';

  ngOnInit () {
    this.data.getMessage().subscribe(message => this.message = message)
    this.data.setMessage(this.message);
    this.data.setToolbarVisibilty(this.isVisible)
  }
  setTitle(num: number) {
    if(num== 1) {
      this.data.setMessage(this.title1);
    }  
    if(num == 2) {
      this.data.setMessage(this.title2);
    }
    if(num == 3) {
      this.data.setMessage(this.title3);
    }
  }
}
