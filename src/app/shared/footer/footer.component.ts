import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  img1 = "../../../assets/final_logo_gold_black.png";
  img2 = "../../../assets/arizona-state-university-logo-vertical.png";
  constructor() { }

  ngOnInit(): void {
  }

}
