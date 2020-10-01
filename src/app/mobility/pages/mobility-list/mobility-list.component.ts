import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { cities } from "../../../shared/cities";
import { products } from "../../../shared/products";

@Component({
  selector: "app-mobility-list",
  templateUrl: "./mobility-list.component.html",
  styleUrls: ["./mobility-list.component.scss"],
})
export class MobilityListComponent implements OnInit {
  currentCity: string;
  productList: typeof products[keyof typeof products];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.city) {
        this.currentCity = cities.find((el) => el.path === params.city).name;
        this.productList = products[params.city];
      }
    });
  }
}
