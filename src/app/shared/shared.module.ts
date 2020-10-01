import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {RouterModule} from '@angular/router'
import { NavbarComponent } from "./navbar/navbar.component";
import { FooterComponent } from "./footer/footer.component";
import { NavbarDefaultLinksComponent } from './navbar-default-links/navbar-default-links.component';

@NgModule({
  declarations: [NavbarComponent, FooterComponent, NavbarDefaultLinksComponent],
  imports: [CommonModule, RouterModule],
  exports: [NavbarComponent, FooterComponent, NavbarDefaultLinksComponent],
})
export class SharedModule {}
