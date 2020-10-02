import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { ButtonComponent } from "./components/button/button.component";
import { MobilityRoutingModule } from "./mobility-routing.module";
import { MobilityCitiesComponent } from "./pages/mobility-cities/mobility-cities.component";
import { MobilityLayoutComponent } from "./pages/mobility-layout/mobility-layout.component";
import { MobilityListComponent } from "./pages/mobility-list/mobility-list.component";
import { MobilityProductComponent } from "./pages/mobility-product/mobility-product.component";

@NgModule({
  declarations: [
    MobilityLayoutComponent,
    MobilityCitiesComponent,
    MobilityListComponent,
    MobilityProductComponent,
    ButtonComponent,
  ],
  imports: [CommonModule, MobilityRoutingModule, SharedModule],
})
export class MobilityModule {}
