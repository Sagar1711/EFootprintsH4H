import { Component, OnInit } from '@angular/core';
import { faShoePrints } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-header',
  templateUrl: './nav-header.component.html',
  styleUrls: ['./nav-header.component.scss']
})
export class NavHeaderComponent implements OnInit {

  faShoePrints = faShoePrints;

  constructor() { }

  ngOnInit(): void {
  }

}
