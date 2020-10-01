import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { MobilityCitiesComponent } from "./pages/mobility-cities/mobility-cities.component";
import { MobilityLayoutComponent } from "./pages/mobility-layout/mobility-layout.component";
import { MobilityListComponent } from "./pages/mobility-list/mobility-list.component";
import { MobilityProductComponent } from "./pages/mobility-product/mobility-product.component";

const routes: Routes = [
  {
    path: "",
    component: MobilityLayoutComponent,
    children: [
      { path: "", component: MobilityCitiesComponent, pathMatch: "exact" },
      { path: ":city", component: MobilityListComponent },
      { path: ":city/:product", component: MobilityProductComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MobilityRoutingModule {}
