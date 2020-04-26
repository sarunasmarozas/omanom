import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MainComponent } from "./app-level-components/main/main.component";
import { FooterComponent } from "./app-level-components/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./feature-modules/material-module/material.module";
import { GalleryService } from "./services/gallery.service";
import { SideNavComponent } from './app-level-components/main/components/side-nav/side-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FooterComponent,
    SideNavComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: "serverApp" }),
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  providers: [GalleryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
