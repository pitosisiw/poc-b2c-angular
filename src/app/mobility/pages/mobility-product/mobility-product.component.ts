import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { products } from "../../../shared/products";

@Component({
  selector: "app-mobility-product",
  templateUrl: "./mobility-product.component.html",
  styleUrls: ["./mobility-product.component.scss"],
})
export class MobilityProductComponent implements OnInit {
  product: typeof products[keyof typeof products][number];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params.city) {
        this.product = products[params.city].find(
          (el) => el.path === params.product
        );
      }
    });
  }
  buy() {
    alert("You bought the bike!");
  }
}
