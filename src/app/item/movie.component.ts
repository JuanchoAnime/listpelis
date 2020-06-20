import { Component, OnInit } from "@angular/core";

import { Peli } from "./peli.interface";
import { PelisService } from "./pelis.service";

@Component({
    selector: "ns-items",
    templateUrl: "./movie.component.html"
})
export class ItemsComponent implements OnInit {
    items: Array<Peli>;

    constructor(private itemService: PelisService) { }

    ngOnInit(): void {
        this.items = this.itemService.getPelis();
    }
}
