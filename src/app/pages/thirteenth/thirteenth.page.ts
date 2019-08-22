import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-thirteenth',
  templateUrl: './thirteenth.page.html',
  styleUrls: ['./thirteenth.page.scss'],
})
export class ThirteenthPage implements OnInit {

  constructor() { }
  title = 'Car Culture';
  Chapter: Chapter = {
    pageNumber: 13,
    name: 'Car Culture',
    chapter: 11
  };

  ngOnInit() {
  }

}
