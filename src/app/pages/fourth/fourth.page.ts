import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-fourth',
  templateUrl: './fourth.page.html',
  styleUrls: ['./fourth.page.scss'],
})
export class FourthPage implements OnInit {
  constructor() { }
  title = 'Track Days';
  Chapter: Chapter = {
    pageNumber: 4,
    name: 'Track Days',
    chapter: 2
  };
  ngOnInit() {
  }

}
