import { Component, OnInit } from '@angular/core';
import {globalLinks} from '../global-links'

@Component({
  selector: 'app-navbar-default-links',
  templateUrl: './navbar-default-links.component.html',
  styleUrls: ['./navbar-default-links.component.scss']
})
export class NavbarDefaultLinksComponent implements OnInit {
  links = globalLinks
  constructor() { }

  ngOnInit(): void {
  }

}
