import { Component, OnInit } from "@angular/core";
import { GalleryService } from "src/app/services/gallery.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.scss"]
})
export class HeaderComponent implements OnInit {
  constructor(private galleryService: GalleryService) {}

  ngOnInit() {}

  onAddGalleryCard() {
    console.log("onAddGalleryCard");
    this.galleryService.addGalleryCard().subscribe();
  }

  onShowGalleryCards() {
    console.log("onShowGalleryCards");
    this.galleryService.getGallerycard().subscribe();
  }
}
