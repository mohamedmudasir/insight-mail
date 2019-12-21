import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MailContentComponent } from "./dashboard/mail-content/mail-content.component";

const coreRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [{ path: "details", component: MailContentComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
