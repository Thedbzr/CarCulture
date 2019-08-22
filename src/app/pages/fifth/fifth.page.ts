import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.page.html',
  styleUrls: ['./fifth.page.scss'],
})
export class FifthPage implements OnInit {
  constructor() { }

  title = 'Import Nation';
  Chapter: Chapter = {
    pageNumber: 5,
    name: 'Import Nation',
    chapter: 3
  };

  ngOnInit() {
  }

}
