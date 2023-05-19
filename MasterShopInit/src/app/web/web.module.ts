import { NgModule } from "@angular/core";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { AppRoutingModule } from "../app-routing.module";
import { IndexComponent } from "./index/index.component";
import { WebLayoutComponent } from "./layout/web-layout.component";
import { MatCardModule } from "@angular/material/card";
import { MatTableModule } from "@angular/material/table";

@NgModule({
    declarations: [
        WebLayoutComponent,
        IndexComponent,
    ],
    imports: [
        AppRoutingModule,
        NgbModule,
        MatCardModule,
        MatTableModule
    ]
})

export class WebModule {

}