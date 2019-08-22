import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}
@Component({
  selector: 'app-ninth',
  templateUrl: './ninth.page.html',
  styleUrls: ['./ninth.page.scss'],
})
export class NinthPage implements OnInit {

  constructor() { }

  title = 'Gumball 3000';
  Chapter: Chapter = {
    pageNumber: 9,
    name: 'Gumball 3000',
    chapter: 7
  };
  ngOnInit() {
  }

}
