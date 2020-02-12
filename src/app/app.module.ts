import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./app-level-components/header/header.component";
import { MainComponent } from "./app-level-components/main/main.component";
import { FooterComponent } from "./app-level-components/footer/footer.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MaterialModule } from "./feature-modules/material-module/material.module";
import { GalleryComponent } from "./app-level-components/main/components/gallery/gallery.component";
import { GalleryService } from "./services/gallery.service";
import { SideNavComponent } from "./app-level-components/main/components/side-nav/side-nav.component";
import { AboutComponent } from "./app-level-components/main/components/about/about.component";
import { ContactsComponent } from "./app-level-components/main/components/contacts/contacts.component";
import { TechComponent } from "./app-level-components/main/components/tech/tech.component";
import { HomeComponent } from './app-level-components/main/components/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    FooterComponent,
    GalleryComponent,
    SideNavComponent,
    AboutComponent,
    ContactsComponent,
    TechComponent,
    HomeComponent
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
