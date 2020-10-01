import { Component, OnInit } from "@angular/core";
import { cities } from "../../../shared/cities";

@Component({
  selector: "app-mobility-cities",
  templateUrl: "./mobility-cities.component.html",
  styleUrls: ["./mobility-cities.component.scss"],
})
export class MobilityCitiesComponent implements OnInit {
  cities = cities;
  constructor() {}

  ngOnInit(): void {}
}
