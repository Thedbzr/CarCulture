import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-tenth',
  templateUrl: './tenth.page.html',
  styleUrls: ['./tenth.page.scss'],
})
export class TenthPage implements OnInit {

  constructor() { }

  title = 'The Holy Trinity';
  Chapter: Chapter = {
    pageNumber: 10,
    name: 'The Holy Trinity',
    chapter: 8
  };

  ngOnInit() {
  }

}
