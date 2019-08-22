import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}
@Component({
  selector: 'app-twelfth',
  templateUrl: './twelfth.page.html',
  styleUrls: ['./twelfth.page.scss'],
})
export class TwelfthPage implements OnInit {

  constructor() { }
  title = '1/4 Mile';
  Chapter: Chapter = {
    pageNumber: 12,
    name: '1/4 Mile',
    chapter: 10
  };

  ngOnInit() {
  }

}
