import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-sixth',
  templateUrl: './sixth.page.html',
  styleUrls: ['./sixth.page.scss'],
})
export class SixthPage implements OnInit {
  constructor() { }

  title = 'JDM';
  Chapter: Chapter = {
    pageNumber: 6,
    name: 'JDM',
    chapter: 4
  };

  ngOnInit() {
  }

}
