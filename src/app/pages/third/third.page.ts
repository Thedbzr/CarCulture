import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-third',
  templateUrl: './third.page.html',
  styleUrls: ['./third.page.scss'],
})
export class ThirdPage implements OnInit {

  constructor() { }

  title = 'The Racing Spirit';
  Chapter: Chapter = {
    pageNumber: 3,
    name: 'The Racing Spirit',
    chapter: 1
  };

  ngOnInit() {
  }

}
