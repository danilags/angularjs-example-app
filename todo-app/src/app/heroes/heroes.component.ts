import { Component, OnInit } from '@angular/core';

import { Hero } from '../hero';

@Component({
  // the component CSS element selector
  selector: 'app-heroes',
  // the location of the template file
  templateUrl: './heroes.component.html',
  // private css
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  hero: Hero = {
    id: 1,
    name: 'Superman'
  };

  constructor() {

  }

  ngOnInit() {
  }

}
