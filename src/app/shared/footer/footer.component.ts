import { Component, OnInit } from '@angular/core';
import {globalLinks} from '../global-links'

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  links = globalLinks
  constructor() { }

  ngOnInit(): void {
  }

}
