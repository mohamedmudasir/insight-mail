import { Component, OnInit } from "@angular/core";
import {
  faEnvelope,
  faChartArea,
  faChartPie,
  faCog,
  faCubes,
  faDiceD20,
  faDesktop,
  faGlobe,
  faKeyboard,
  faLaptop,
  faLayerGroup,
  faMapMarkedAlt,
  faShieldAlt,
  faThLarge,
  faTrashAlt,
  faUser
} from "@fortawesome/free-solid-svg-icons";
@Component({
  selector: "app-navigation",
  templateUrl: "./navigation.component.html",
  styleUrls: ["./navigation.component.scss"]
})
export class NavigationComponent implements OnInit {
  faIcons = {
    faEnvelope,
    faChartArea,
    faChartPie,
    faCog,
    faCubes,
    faDiceD20,
    faDesktop,
    faGlobe,
    faKeyboard,
    faLaptop,
    faLayerGroup,
    faMapMarkedAlt,
    faShieldAlt,
    faThLarge,
    faTrashAlt,
    faUser
  };
  constructor() {}

  ngOnInit() {}
}
