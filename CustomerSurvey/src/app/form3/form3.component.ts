import { Component } from '@angular/core';
import { TitleService } from '../service/title.service';

@Component({
  selector: 'app-form3',
  templateUrl: './form3.component.html',
  styleUrls: ['./form3.component.css']
})
export class Form3Component {
  constructor(private data: TitleService) {

  }

  message: string = 'Survey Page 3';
  isVisible = true;

  ngOnInit () {
    this.data.getMessage().subscribe(message => this.message = message)
    this.data.setMessage(this.message);
    this.data.setToolbarVisibilty(this.isVisible);
  }
}
