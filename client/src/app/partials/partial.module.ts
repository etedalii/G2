import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { BasePageComponent } from "./base-page/base-page.component";
import { FooterComponent } from "./footer/footer.component";
import { HeaderComponent } from "./header/header.component";

@NgModule({
    imports: [BrowserModule, FormsModule, RouterModule],
    declarations: [BasePageComponent, FooterComponent, HeaderComponent],
    exports: [BasePageComponent, FooterComponent, HeaderComponent]
})

export class PartialModule {}