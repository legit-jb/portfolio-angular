import { Component, OnInit } from "@angular/core";

@Component({
    selector: "app-navbar",
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
    navbarClass = "navbar row";
    constructor() {
        this.navbarClass = "navbar row";

    }
    ngOnInit(): void {
    }
    collapseNav(){
        if (this.navbarClass == "navbar row responsive") {
            this.navbarClass = "navbar row";
        } else {
            this.navbarClass = "navbar row responsive";
        }
    }

    clickedLink(){
        if (this.navbarClass == "navbar row responsive") {
            this.navbarClass = "navbar row";
        }
      }
}