import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-second',
  templateUrl: './second.page.html',
  styleUrls: ['./second.page.scss'],
})
export class SecondPage implements OnInit {

  constructor() { }

  title = 'Introduction';
  Chapter: Chapter = {
    pageNumber: 2,
    name: 'Introduction',
    chapter: null
  };

  ngOnInit() {
  }

}
