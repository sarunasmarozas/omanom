import { Component, OnInit } from "@angular/core";
import { GalleryService, GalleryItem } from "src/app/services/gallery.service";
import { Observable } from "rxjs";

@Component({
  selector: "app-gallery",
  templateUrl: "./gallery.component.html",
  styleUrls: ["./gallery.component.scss"]
})
export class GalleryComponent implements OnInit {
  constructor(private galleryService: GalleryService) {}
  galleryItems: any;

  ngOnInit() {
    this.galleryService
      .getGalleryItems()
      .subscribe(items => (this.galleryItems = items));
  }
}
