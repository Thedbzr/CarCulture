import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-eigth',
  templateUrl: './eigth.page.html',
  styleUrls: ['./eigth.page.scss'],
})
export class EigthPage implements OnInit {

  constructor() { }
  title = 'Exotic Nights';
  Chapter: Chapter = {
    pageNumber: 8,
    name: 'Exotic Nights',
    chapter: 6
  };

  ngOnInit() {
  }

}
