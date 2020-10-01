import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { CityListComponent } from "./components/city-list/city-list.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { MobilityCitiesComponent } from "./pages/mobility-cities/mobility-cities.component";
import { MobilityLayoutComponent } from "./pages/mobility-layout/mobility-layout.component";
import { MobilityListComponent } from "./pages/mobility-list/mobility-list.component";
import { MobilityProductComponent } from "./pages/mobility-product/mobility-product.component";

@NgModule({
  declarations: [
    MobilityLayoutComponent,
    MobilityCitiesComponent,
    MobilityListComponent,
    ProductListComponent,
    CityListComponent,
    MobilityProductComponent,
  ],
  imports: [CommonModule],
})
export class MobilityModule {}