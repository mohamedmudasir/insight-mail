import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mail-content',
  templateUrl: './mail-content.component.html',
  styleUrls: ['./mail-content.component.scss']
})
export class MailContentComponent implements OnInit {
  @Input() mail: Object;
  constructor() { }

  ngOnInit() {
  }

}
