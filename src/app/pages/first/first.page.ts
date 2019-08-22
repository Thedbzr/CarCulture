import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {

  constructor() { }

  title = 'Dedication';
  Chapter: Chapter = {
    pageNumber: 1,
    name: 'Dedication',
    chapter: null
  };

  ngOnInit() {
  }

}
