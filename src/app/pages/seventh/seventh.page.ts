import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-seventh',
  templateUrl: './seventh.page.html',
  styleUrls: ['./seventh.page.scss'],
})
export class SeventhPage implements OnInit {
  constructor() { }

  title = 'Drifting';
  Chapter: Chapter = {
    pageNumber: 7,
    name: 'Drifting',
    chapter: 5
  };

  ngOnInit() {
  }

}
