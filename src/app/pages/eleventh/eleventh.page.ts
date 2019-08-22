import { Component, OnInit } from '@angular/core';

export class Chapter {
  pageNumber: number;
  name: string;
  chapter: number;
}

@Component({
  selector: 'app-eleventh',
  templateUrl: './eleventh.page.html',
  styleUrls: ['./eleventh.page.scss'],
})
export class EleventhPage implements OnInit {

  constructor() { }

  title = 'Concept Cars';
  Chapter: Chapter = {
    pageNumber: 11,
    name: 'Concept Cars',
    chapter: 9
  };

  ngOnInit() {
  }

}
