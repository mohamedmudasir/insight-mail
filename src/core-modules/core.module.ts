import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { NavigationComponent } from "./dashboard/navigation/navigation.component";
import { HeaderComponent } from "./dashboard/header/header.component";
import { CoreRoutingModule } from "./core-modules-routing.module";
import { MailContentComponent } from "./dashboard/mail-content/mail-content.component";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { MailListComponent } from './dashboard/mail-list/mail-list.component';
import { MailComposeComponent } from './dashboard/mail-compose/mail-compose.component';
import { SentMailListComponent } from './dashboard/sent-mail-list/sent-mail-list.component';

@NgModule({
  declarations: [
    DashboardComponent,
    NavigationComponent,
    HeaderComponent,
    MailContentComponent,
    MailListComponent,
    MailComposeComponent,
    SentMailListComponent
  ],
  imports: [CommonModule, CoreRoutingModule, FontAwesomeModule, FormsModule, ReactiveFormsModule],
  exports: []
})
export class CoreModule {}
