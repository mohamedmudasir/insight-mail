import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { PreLoginModule } from "src/pre-login/pre-login.module";
import { CoreModule } from "src/core-modules/core.module";

const appRoutes: Routes = [
  {
    path: "u",
    loadChildren: () =>
      import("../pre-login/pre-login.module").then(m => PreLoginModule)
  },
  {
    path: "",
    loadChildren: () =>
      import("../core-modules/core.module").then(m => CoreModule)
  }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
