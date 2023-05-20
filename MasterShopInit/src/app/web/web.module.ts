import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "../app-routing.module";
import { IndexComponent } from "./index/index.component";
import { WebLayoutComponent } from "./layout/web-layout.component";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";
import { BrowserModule } from '@angular/platform-browser';
import { CartComponent } from './cart/cart.component'
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";

@NgModule({
    declarations: [
        WebLayoutComponent,
        IndexComponent,
        CartComponent,
    ],
    imports: [
        AppRoutingModule,
        NgbModule,
        MatCardModule,
        MatTableModule,
        BrowserModule,
        MatIconModule,
        MatMenuModule,
    ]
})

export class WebModule {

}