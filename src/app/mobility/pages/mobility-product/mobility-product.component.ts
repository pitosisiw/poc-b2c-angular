import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { products } from "../../../shared/products";

@Component({
  selector: "app-mobility-product",
  templateUrl: "./mobility-product.component.html",
  styleUrls: ["./mobility-product.component.scss"],
})
export class MobilityProductComponent implements OnInit {
  product: typeof products[keyof typeof products][number];

  state$ = new BehaviorSubject<"green" | "blue">("green");
  sharedState$ = this.state$.asObservable();

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
    this.toggleState();
  }

  toggleState() {
    const currentState = this.state$.getValue();

    if (currentState === "green") this.state$.next("blue");
    else this.state$.next("green");
  }
}
