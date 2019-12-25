import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MailContentComponent } from "./dashboard/mail-content/mail-content.component";
import { MailListComponent } from "./dashboard/mail-list/mail-list.component";
import { SentMailListComponent } from "./dashboard/sent-mail-list/sent-mail-list.component";

const coreRoutes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: MailListComponent },
      { path: "sent", component: SentMailListComponent },
      { path: "details", component: MailContentComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(coreRoutes)],
  exports: [RouterModule]
})
export class CoreRoutingModule {}
