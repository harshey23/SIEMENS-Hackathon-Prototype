import { Component, OnInit } from '@angular/core';
import { TitleService } from './service/title.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CustomerSurvey';

  constructor(private data: TitleService) {

  }

  message = '360 Insights Pro';
  isVisible = true;

  ngOnInit () {
    
    this.data.getMessage().subscribe(message => this.message = message)
    this.data.setMessage(this.message);
    this.data.getToolBarVisibility().subscribe(isVisible => this.isVisible = isVisible)
    this.data.setToolbarVisibilty(this.isVisible);
    
  }
}
