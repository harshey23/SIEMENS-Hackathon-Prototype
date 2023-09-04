import { Component, OnInit } from '@angular/core';
import { TitleService } from '../service/title.service';

@Component({
  selector: 'app-acknowledge',
  templateUrl: './acknowledge.component.html',
  styleUrls: ['./acknowledge.component.css']
})
export class AcknowledgeComponent implements OnInit {
  constructor(private data: TitleService) {

  }

  isVisible = false;

  ngOnInit () {
    //this.data.getMessage().subscribe(message => this.message = message)
    this.data.setToolbarVisibilty(this.isVisible);
  }

}
