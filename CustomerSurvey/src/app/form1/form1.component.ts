import { Component } from '@angular/core';
import { TitleService } from '../service/title.service';

@Component({
  selector: 'app-form1',
  templateUrl: './form1.component.html',
  styleUrls: ['./form1.component.css']
})
export class Form1Component {
  constructor(private data: TitleService) {

  }

  message: string = 'Survey Page 1';
  isVisible = true;

  ngOnInit () {
    this.data.getMessage().subscribe(message => this.message = message)
    this.data.setMessage(this.message);
    this.data.setToolbarVisibilty(this.isVisible);
  }
}
